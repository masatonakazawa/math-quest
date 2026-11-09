// Single source of truth for mutable game state.

import { START_LIFE, START_LEVEL } from "./config.js";
import { DEFAULT_OPERATION } from "./operations.js";

export const state = {
  counter: 1, // question number
  score: 0,
  highScore: 0,
  life: START_LIFE,
  level: START_LEVEL,
  operation: DEFAULT_OPERATION,
  gameOver: false,
  problem: null, // { a, b, op, answer, text }
};

// Reset everything except the high score and chosen operation.
export function resetRun() {
  state.counter = 1;
  state.score = 0;
  state.life = START_LIFE;
  state.level = START_LEVEL;
  state.gameOver = false;
}
