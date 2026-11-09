// Game rules and flow.

import { LEVEL_UP_EVERY, NEXT_PROBLEM_DELAY_MS } from "./config.js";
import { state } from "./state.js";
import { generateProblem } from "./problem.js";
import { playSound } from "./audio.js";
import * as ui from "./ui.js";

function checkLevelUp() {
  // NOTE: preserved from the original — also fires at score 0, so the
  // level rises on every new problem until the first point is scored.
  if (state.score % LEVEL_UP_EVERY === 0) {
    state.level++;
    ui.setMonsterSize(state.level);
    playSound("levelUp");
  }
}

function nextProblem() {
  state.problem = generateProblem(state.counter, state.level);
  ui.renderProblem(state.problem.text);
  ui.clearAnswerInput();
  ui.showIdleSprites();
  checkLevelUp();
}

function handleCorrect() {
  state.score++;
  ui.renderScore(state.score);
  ui.showMonsterHurt();
  playSound("correct");
}

function handleIncorrect() {
  state.life--;
  ui.renderLife(state.life);
  ui.showPlayerHurt();
  playSound("incorrect");
}

function handleGameOver() {
  // NOTE: preserved from the original — high score is overwritten even when
  // lower, and play continues after life reaches 0.
  state.highScore = state.score;
  ui.renderHighScore(state.highScore);
}

export function submitAnswer() {
  const raw = ui.getAnswerInput();
  if (raw === "") {
    ui.setPlaceholder("Enter a number!");
    return;
  }

  if (Number(raw) === state.problem.answer) handleCorrect();
  else handleIncorrect();

  if (state.life === 0) handleGameOver();

  setTimeout(nextProblem, NEXT_PROBLEM_DELAY_MS);
  state.counter++;
  ui.setPlaceholder("Your answer");
}

export function startGame() {
  nextProblem();
  ui.renderScore(state.score);
  ui.renderHighScore(state.highScore);
  ui.renderLife(state.life);
}
