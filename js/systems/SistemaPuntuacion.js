import { clampScore } from '../core/GameState.js';

export const SCORE_RULES = {
  facil: { correct: 5, incorrect: 3 },
  intermedia: { correct: 8, incorrect: 5 },
  dificil: { correct: 12, incorrect: 8 },
  experto: { correct: 15, incorrect: 10 },
};

export class ScoreSystem {
  constructor() {
    this.score = 50;
  }

  reset() {
    this.score = 50;
    return this.score;
  }

  getValue() {
    return this.score;
  }

  setValue(value) {
    this.score = clampScore(value);
    return this.score;
  }

  addAnswer(difficulty, isCorrect) {
    const rules = SCORE_RULES[difficulty] || SCORE_RULES.facil;
    const delta = isCorrect ? rules.correct : -rules.incorrect;
    this.score = clampScore(this.score + delta);
    return delta;
  }
}
