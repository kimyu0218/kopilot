import { spellCheck } from '../spell/spellCheck.js';
import { CharCounter } from '../utils/charCounter.js';

class AutoStorage {
  #textarea;
  constructor() {
    this.init();
  }

  init() {
    this.#textarea = document.getElementById('textarea');
    this.loadContent();
    this.startAutoSaveLocal();
  }

  loadContent() {
    const savedContent = localStorage.getItem('latestContent');
    if (savedContent) {
      this.#textarea.value = savedContent;
    }
  }

  #saveContentLocal() {
    localStorage.setItem('latestContent', this.#textarea.value);
  }

  startAutoSaveLocal() {
    this.intervalIdLocal = setInterval(() => {
      this.#saveContentLocal();
    }, 3000);
  }
}

export const autoStorage = new AutoStorage();
