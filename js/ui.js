// All DOM access lives here. Game logic calls these; it never touches the DOM.

import {
  SELECTORS,
  IMAGES,
  MONSTER_BASE_PX,
  MONSTER_PX_PER_LEVEL,
  MONSTER_MAX_PX,
} from "./config.js";

const $ = (sel) => document.querySelector(sel);

const el = {
  titleScreen: $(SELECTORS.titleScreen),
  gameScreen: $(SELECTORS.gameScreen),
  gameOver: $(SELECTORS.gameOver),
  gameOverScore: $(SELECTORS.gameOverScore),
  gameOverBest: $(SELECTORS.gameOverBest),
  problem: $(SELECTORS.problem),
  answer: $(SELECTORS.answer),
  score: $(SELECTORS.score),
  life: $(SELECTORS.life),
  level: $(SELECTORS.level),
  highScore: $(SELECTORS.highScore),
  player: $(SELECTORS.player),
  monster: $(SELECTORS.monster),
  opButtons: document.querySelectorAll(SELECTORS.opButtons),
};

// ----- Screens -----
export const isTitleVisible = () => !el.titleScreen.hidden;

export function showTitle() {
  el.titleScreen.hidden = false;
  el.gameScreen.hidden = true;
  el.gameOver.hidden = true;
}

export function showGame() {
  el.titleScreen.hidden = true;
  el.gameScreen.hidden = false;
  el.gameOver.hidden = true;
}

export function showGameOver(score, highScore, isNewBest) {
  el.gameOverScore.textContent = `Score: ${score}`;
  el.gameOverBest.textContent = isNewBest
    ? "New high score!"
    : `Best: ${highScore}`;
  el.gameOver.hidden = false;
}

export const hideGameOver = () => (el.gameOver.hidden = true);

// ----- HUD -----
export const renderProblem = (text) => (el.problem.textContent = text);
export const renderScore = (n) => (el.score.textContent = `Score ${n}`);
export const renderLevel = (n) => (el.level.textContent = `Level ${n}`);
export const renderHighScore = (n) =>
  (el.highScore.textContent = `Best ${n}`);
export const renderLife = (n) =>
  (el.life.textContent = n > 0 ? "♥".repeat(n) : "—");

// ----- Operation selector -----
export function renderOperation(op) {
  el.opButtons.forEach((b) =>
    b.classList.toggle("is-active", b.dataset.op === op)
  );
}

// ----- Answer input -----
export const getAnswerInput = () => el.answer.value;
export const clearAnswerInput = () => (el.answer.value = "");
export const setPlaceholder = (text) => (el.answer.placeholder = text);
export const focusAnswer = () => el.answer.focus();
export const setAnswerEnabled = (enabled) => {
  el.answer.disabled = !enabled;
  if (enabled) el.answer.focus();
};

// ----- Sprites -----
export const setMonsterSize = (level) => {
  const px = Math.min(
    MONSTER_BASE_PX + level * MONSTER_PX_PER_LEVEL,
    MONSTER_MAX_PX
  );
  el.monster.style.height = `${px}px`;
};

export const showIdleSprites = () => {
  el.monster.src = IMAGES.monster;
  el.player.src = IMAGES.player;
};
export const showMonsterHurt = () => (el.monster.src = IMAGES.monsterHurt);
export const showPlayerHurt = () => (el.player.src = IMAGES.playerHurt);
