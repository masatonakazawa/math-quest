// Sound effects.

import { SOUNDS } from "./config.js";

const sounds = Object.fromEntries(
  Object.entries(SOUNDS).map(([name, src]) => [name, new Audio(src)])
);

export const playSound = (name) => sounds[name].play();
