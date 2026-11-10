import { NIVELES } from '../data/preguntas.js';

export class LevelSystem {
  constructor() {
    this.currentLevel = 0;
    this.totalLevels = NIVELES.length;
  }

  reset() {
    this.currentLevel = 0;
  }

  getCurrentLevel() {
    return NIVELES[this.currentLevel] || NIVELES[0];
  }

  getCurrentLevelNumber() {
    return this.currentLevel + 1;
  }

  advance() {
    this.currentLevel += 1;
  }

  isFinalLevel() {
    return this.currentLevel >= this.totalLevels - 1;
  }

  isGameCompleted() {
    return this.currentLevel >= this.totalLevels;
  }
}
