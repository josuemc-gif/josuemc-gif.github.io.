import { createInitialGameState, SCREEN_IDS } from './GameState.js';
import { NIVELES, QUESTION_BANK } from '../data/preguntas.js';
import { ScoreSystem } from '../systems/SistemaPuntuacion.js';
import { LevelSystem } from '../systems/SistemaNiveles.js';
import { drawClassroom, drawTeacher } from '../components/Maestro.js';
import { drawStudent } from '../components/Alumno.js';
import { answerContainsPoint, drawAnswerOption } from '../components/Respuesta.js';

const screenMap = {
  menu: document.getElementById('menuScreen'),
  game: document.getElementById('gameScreen'),
  level: document.getElementById('levelScreen'),
  lose: document.getElementById('loseScreen'),
  victory: document.getElementById('victoryScreen'),
};

export class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.ui = {
      levelLabel: document.getElementById('levelLabel'),
      scoreLabel: document.getElementById('scoreLabel'),
      scoreFill: document.getElementById('scoreFill'),
      questionCounter: document.getElementById('questionCounter'),
      teacherBubble: document.getElementById('teacherBubble'),
      questionText: document.getElementById('questionText'),
      feedbackBox: document.getElementById('feedbackBox'),
      levelResultText: document.getElementById('levelResultText'),
      levelScoreText: document.getElementById('levelScoreText'),
      loseScoreText: document.getElementById('loseScoreText'),
      finalScoreText: document.getElementById('finalScoreText'),
    };

    this.scoreSystem = new ScoreSystem();
    this.levelSystem = new LevelSystem();
    this.state = createInitialGameState();
    this.questionsPool = [];
    this.answerOptions = [];
    this.pendingTransition = null;
    this.lastTimestamp = 0;
    this.audioContext = null;

    this.bindUI();
    window.__game = this;
    this.setScreen(SCREEN_IDS.MENU);
    this.renderFrame();
    requestAnimationFrame((ts) => this.gameLoop(ts));
  }

  bindUI() {
    document.getElementById('startButton').addEventListener('click', () => this.startNewGame());
    document.getElementById('instructionsButton').addEventListener('click', () => {
      alert('Instrucciones: selecciona la respuesta correcta antes de que las opciones lleguen al piso. Acumula puntos hasta 100 para aprobar cada nivel. Si caes a 0, repites la clase.');
    });
    document.getElementById('creditsButton').addEventListener('click', () => {
      alert('Créditos: videojuego educativo desarrollado con HTML5, CSS3 y JavaScript para practicar programación desde el salón de clases.');
    });
    document.getElementById('nextLevelButton').addEventListener('click', () => this.continueToNextLevel());
    document.getElementById('retryButton').addEventListener('click', () => this.startNewGame());
    document.getElementById('menuButton').addEventListener('click', () => this.setScreen(SCREEN_IDS.MENU));
    document.getElementById('playAgainButton').addEventListener('click', () => this.startNewGame());
    this.canvas.addEventListener('click', (event) => this.handleCanvasClick(event));
  }

  setScreen(screenName) {
    Object.entries(screenMap).forEach(([key, element]) => {
      element.classList.toggle('hidden', key !== screenName);
    });
    this.state.screen = screenName;
  }

  startNewGame() {
    this.scoreSystem.reset();
    this.levelSystem.reset();
    this.state = createInitialGameState();
    this.state.screen = SCREEN_IDS.GAME;
    this.setScreen(SCREEN_IDS.GAME);
    this.questionsPool = this.getShuffledQuestionsForLevel(this.levelSystem.getCurrentLevelNumber());
    this.loadQuestion();
  }

  getShuffledQuestionsForLevel(levelNumber) {
    const pool = QUESTION_BANK[levelNumber] || [];
    return [...pool].sort(() => Math.random() - 0.5);
  }

  loadQuestion() {
    const currentLevel = this.levelSystem.getCurrentLevelNumber();
    const total = this.questionsPool.length || 1;
    const currentQuestion = this.questionsPool[this.state.questionIndex]?.question ? this.questionsPool[this.state.questionIndex] : null;

    if (!currentQuestion) {
      this.finishLevelSuccess();
      return;
    }

    this.state.currentQuestion = currentQuestion;
    this.state.answered = false;
    this.ui.teacherBubble.textContent = `Nivel ${currentLevel}: ${this.levelSystem.getCurrentLevel().title}`;
    this.ui.questionText.textContent = currentQuestion.question;
    this.ui.feedbackBox.className = 'feedback hidden';
    this.ui.feedbackBox.textContent = '';
    this.answerOptions = this.generateAnswerOptions(currentQuestion);
    this.updateHud();
  }

  generateAnswerOptions(question) {
    const width = 240;
    const height = 64;
    const columns = 2;
    const gapX = 40;
    const gapY = 26;
    const startX = 170;
    const startY = 40;

    return question.options.map((text, index) => {
      const xIndex = index % columns;
      const yIndex = Math.floor(index / columns);
      return {
        text,
        correct: index === question.correctIndex,
        x: startX + xIndex * (width + gapX),
        y: startY + yIndex * (height + gapY) - 120,
        width,
        height,
        speed: 0.45 + (this.levelSystem.getCurrentLevelNumber() * 0.08) + (index * 0.01),
      };
    });
  }

  updateHud() {
    const currentLevel = this.levelSystem.getCurrentLevelNumber();
    const maxCount = this.questionsPool.length || 1;
    const displayIndex = this.state.questionIndex + 1;

    this.ui.levelLabel.textContent = String(currentLevel);
    this.ui.scoreLabel.textContent = String(this.scoreSystem.getValue());
    this.ui.scoreFill.style.width = `${this.scoreSystem.getValue()}%`;
    this.ui.questionCounter.textContent = `${Math.min(displayIndex, maxCount)}/${maxCount}`;
  }

  handleCanvasClick(event) {
    if (this.state.screen !== SCREEN_IDS.GAME || this.state.answered) {
      return;
    }

    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    const hitOption = this.answerOptions.find((option) => answerContainsPoint(option, x, y));
    if (!hitOption) return;

    this.processAnswer(hitOption);
  }

  playFeedbackTone(isCorrect) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!this.audioContext) {
      this.audioContext = new AudioContextClass();
    }

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    oscillator.type = isCorrect ? 'triangle' : 'sawtooth';
    oscillator.frequency.value = isCorrect ? 660 : 210;
    gainNode.gain.value = 0.04;
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.15);
  }

  processAnswer(selectedOption) {
    if (this.state.answered || !this.state.currentQuestion) {
      return;
    }

    this.state.answered = true;
    const isCorrect = Boolean(selectedOption.correct);
    const delta = this.scoreSystem.addAnswer(this.state.currentQuestion.difficulty, isCorrect);
    this.state.correctAnswers += isCorrect ? 1 : 0;
    this.state.lastOutcome = isCorrect ? 'correct' : 'incorrect';
    this.playFeedbackTone(isCorrect);

    const feedback = isCorrect ? `¡Correcto! +${Math.abs(delta)} puntos` : `Incorrecto. -${Math.abs(delta)} puntos`;
    this.ui.feedbackBox.textContent = feedback;
    this.ui.feedbackBox.className = `feedback visible ${isCorrect ? 'correct' : 'incorrect'}`;

    if (isCorrect) {
      this.ui.teacherBubble.textContent = '¡Excelente! Sigue así.';
    } else {
      this.ui.teacherBubble.textContent = 'Revisa la respuesta correcta: ' + this.state.currentQuestion.explanation;
    }

    this.state.questionIndex += 1;
    this.ui.scoreLabel.textContent = String(this.scoreSystem.getValue());
    this.ui.scoreFill.style.width = `${this.scoreSystem.getValue()}%`;
    this.updateHud();

    window.setTimeout(() => {
      if (this.scoreSystem.getValue() <= 0) {
        this.ui.loseScoreText.textContent = `Puntuación final: ${this.scoreSystem.getValue()}`;
        this.setScreen(SCREEN_IDS.LOSE);
        return;
      }

      if (this.scoreSystem.getValue() >= 100) {
        this.finishLevelSuccess();
        return;
      }

      this.loadQuestion();
    }, 1000);
  }

  finishLevelSuccess() {
    const levelNumber = this.levelSystem.getCurrentLevelNumber();
    const finalScore = this.scoreSystem.getValue();

    this.ui.levelResultText.textContent = `Has aprobado el nivel ${levelNumber}: ${this.levelSystem.getCurrentLevel().title}.`;
    this.ui.levelScoreText.textContent = `Puntuación: ${finalScore}`;
    this.setScreen(SCREEN_IDS.LEVEL);

    if (this.levelSystem.isFinalLevel()) {
      this.ui.nextLevelButton.textContent = 'Ver final';
    }
  }

  continueToNextLevel() {
    this.levelSystem.advance();

    if (this.levelSystem.isGameCompleted()) {
      this.ui.finalScoreText.textContent = `Puntuación final: ${this.scoreSystem.getValue()}`;
      this.setScreen(SCREEN_IDS.VICTORY);
      return;
    }

    this.scoreSystem.reset();
    this.state.questionIndex = 0;
    this.questionsPool = this.getShuffledQuestionsForLevel(this.levelSystem.getCurrentLevelNumber());
    this.setScreen(SCREEN_IDS.GAME);
    this.loadQuestion();
  }

  gameLoop(timestamp) {
    const deltaSeconds = (timestamp - this.lastTimestamp) / 1000 || 0.016;
    this.lastTimestamp = timestamp;

    if (this.state.screen === SCREEN_IDS.GAME && this.state.currentQuestion && !this.state.answered) {
      this.answerOptions.forEach((option) => {
        option.y += option.speed * 60 * deltaSeconds;
      });

      const missed = this.answerOptions.some((option) => option.y + option.height > this.canvas.height - 35);
      if (missed) {
        this.processAnswer({ correct: false });
      }
    }

    this.renderFrame();
    requestAnimationFrame((ts) => this.gameLoop(ts));
  }

  renderFrame() {
    const { ctx, canvas } = this;
    drawClassroom(ctx, canvas.width, canvas.height, this.levelSystem.getCurrentLevelNumber());
    drawTeacher(ctx, 350, 310, this.state.lastOutcome === 'correct' ? 'success' : this.state.lastOutcome === 'incorrect' ? 'fail' : 'neutral');
    drawStudent(ctx, 770, 370, this.scoreSystem.getValue() >= 75 ? 'success' : this.scoreSystem.getValue() <= 30 ? 'fail' : 'neutral');

    if (this.state.screen === SCREEN_IDS.GAME) {
      this.answerOptions.forEach((option) => drawAnswerOption(ctx, option));
    }

    if (this.state.screen === SCREEN_IDS.GAME) {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
      ctx.fillRect(100, 20, 760, 40);
      ctx.fillStyle = '#f8fafc';
      ctx.font = '600 18px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(this.state.currentQuestion ? this.state.currentQuestion.question : 'Cargando...', 480, 46);
    }
  }
}
