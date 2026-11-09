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
  titleScreen: "#title-screen",
  gameScreen: "#game-screen",
  gameOver: "#gameover",
  gameOverScore: ".overlay__score",
  gameOverBest: ".overlay__best",
  startButton: "#start-btn",
  retryButton: "#retry-btn",
  attackButton: "#attack-btn",
  problem: ".problem",
  answer: ".your-answer",
  score: ".score",
  life: ".life",
  level: ".level",
  highScore: ".high-score",
  player: ".player",
  monster: ".monster",
  opButtons: ".op",
};

// Monster grows with level, up to this many px tall.
export const MONSTER_BASE_PX = 50;
export const MONSTER_PX_PER_LEVEL = 12;
export const MONSTER_MAX_PX = 200;
