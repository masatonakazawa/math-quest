// Tunable game settings and asset paths. Change values here, not in game logic.

export const START_LIFE = 10;
export const START_LEVEL = 1;
export const LEVEL_UP_EVERY = 10; // score multiple that triggers a level-up
export const NEXT_PROBLEM_DELAY_MS = 500;

export const IMAGES = {
  player: "./img/bw_girl_v3.gif",
  playerHurt: "./img/bw_girl_v3down.gif",
  monster: "./img/Sprite-0001b.gif",
  monsterHurt: "./img/Sprite-0001c.gif",
};

export const SOUNDS = {
  correct: "./audio/allright.mp3",
  incorrect: "./audio/incorrect_n4.mp3",
  levelUp: "./audio/slash.mp3",
};

export const SELECTORS = {
  problem: ".problem",
  answer: ".your-answer",
  score: ".score",
  life: ".life",
  highScore: ".high-score",
  player: ".player",
  monster: ".monster",
  dropdownButton: ".dropbtn",
  dropdown: "#myDropdown",
  dropdownItems: ".dropdown-content p",
};
