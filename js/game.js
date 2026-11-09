// Game rules and flow.

import { LEVEL_UP_EVERY, NEXT_PROBLEM_DELAY_MS } from "./config.js";
import { state, resetRun } from "./state.js";
import { generateProblem } from "./problem.js";
import { playSound } from "./audio.js";
import * as ui from "./ui.js";

function nextProblem() {
  if (state.gameOver) return;
  state.problem = generateProblem(state.counter, state.level, state.operation);
  ui.renderProblem(state.problem.text);
  ui.clearAnswerInput();
  ui.showIdleSprites();
}

function levelUp() {
  state.level++;
  ui.renderLevel(state.level);
  ui.setMonsterSize(state.level);
  playSound("levelUp");
}

function handleCorrect() {
  state.score++;
  ui.renderScore(state.score);
  ui.showMonsterHurt();
  playSound("correct");
  if (state.score % LEVEL_UP_EVERY === 0) levelUp();
}

function handleIncorrect() {
  state.life--;
  ui.renderLife(state.life);
  ui.showPlayerHurt();
  playSound("incorrect");
}

function endGame() {
  state.gameOver = true;
  const isNewBest = state.score > state.highScore;
  if (isNewBest) {
    state.highScore = state.score;
    ui.renderHighScore(state.highScore);
  }
  ui.setAnswerEnabled(false);
  ui.showGameOver(state.score, state.highScore, isNewBest);
}

function renderAll() {
  ui.renderScore(state.score);
  ui.renderLife(state.life);
  ui.renderLevel(state.level);
  ui.renderHighScore(state.highScore);
  ui.renderOperation(state.operation);
  ui.setMonsterSize(state.level);
}

export function submitAnswer() {
  if (state.gameOver) {
    startGame();
    return;
  }

  const raw = ui.getAnswerInput();
  if (raw === "") {
    ui.setPlaceholder("Enter a number!");
    return;
  }

  if (Number(raw) === state.problem.answer) handleCorrect();
  else handleIncorrect();

  state.counter++;
  ui.setPlaceholder("Your answer");

  if (state.life === 0) {
    endGame();
    return;
  }
  setTimeout(nextProblem, NEXT_PROBLEM_DELAY_MS);
}

export function setOperation(op) {
  state.operation = op;
  ui.renderOperation(op);
  if (!state.gameOver) {
    nextProblem();
    ui.setAnswerEnabled(true); // refocus the input
  }
}

export function startGame() {
  resetRun();
  ui.showGame();
  ui.setAnswerEnabled(true);
  renderAll();
  nextProblem();
}
