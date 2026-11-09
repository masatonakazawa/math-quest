// All DOM access lives here. Game logic calls these; it never touches the DOM.

import { SELECTORS, IMAGES } from "./config.js";

const $ = (sel) => document.querySelector(sel);

const el = {
  problem: $(SELECTORS.problem),
  answer: $(SELECTORS.answer),
  score: $(SELECTORS.score),
  life: $(SELECTORS.life),
  highScore: $(SELECTORS.highScore),
  player: $(SELECTORS.player),
  monster: $(SELECTORS.monster),
  operationButton: $(SELECTORS.dropdownButton),
};

export const renderProblem = (text) => (el.problem.textContent = text);
export const renderScore = (n) => (el.score.textContent = `Score: ${n}`);
export const renderLife = (n) => (el.life.textContent = `Life: ${n}`);
export const renderHighScore = (n) =>
  (el.highScore.textContent = `High Score: ${n}`);

export const getAnswerInput = () => el.answer.value;
export const clearAnswerInput = () => (el.answer.value = "");
export const setPlaceholder = (text) => (el.answer.placeholder = text);

export const setMonsterSize = (level) =>
  (el.monster.style.height = `${level * 10 + 20}px`);

export const showIdleSprites = () => {
  el.monster.src = IMAGES.monster;
  el.player.src = IMAGES.player;
};
export const showMonsterHurt = () => (el.monster.src = IMAGES.monsterHurt);
export const showPlayerHurt = () => (el.player.src = IMAGES.playerHurt);

export const renderOperation = (op) =>
  (el.operationButton.textContent = `Operation: ${op}`);

export const setAnswerEnabled = (enabled) => {
  el.answer.disabled = !enabled;
  if (enabled) el.answer.focus();
};
