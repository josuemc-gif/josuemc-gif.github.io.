export const SCREEN_IDS = {
  MENU: 'menu',
  GAME: 'game',
  LEVEL: 'level',
  LOSE: 'lose',
  VICTORY: 'victory',
};

export function createInitialGameState() {
  return {
    screen: SCREEN_IDS.MENU,
    score: 50,
    levelIndex: 0,
    questionIndex: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    lastOutcome: null,
    currentQuestion: null,
    currentOptions: [],
    answered: false,
    levelCompleted: false,
    gameCompleted: false,
    showFeedback: false,
    feedbackText: '',
    teacherMessage: '¡Vamos a aprender programación!',
  };
}

export function clampScore(value) {
  return Math.min(100, Math.max(0, value));
}
