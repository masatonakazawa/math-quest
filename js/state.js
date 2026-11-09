// Single source of truth for mutable game state.

import { START_LIFE, START_LEVEL } from "./config.js";

export const state = {
  counter: 1, // question number
  score: 0,
  highScore: 0,
  life: START_LIFE,
  level: START_LEVEL,
  problem: null, // { a, b, answer, text }
};
