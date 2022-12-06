let number1, number2, answer, problem;
let counter = 1;
let score = 0;
let highscore = 0;
let life = 10;
let level = 1;

let correct1 = new Audio("./audio/allright.mp3");
let incorrect1 = new Audio("./audio/incorrect_n4.mp3");
let slash = new Audio("./audio/slash.mp3");

const problemEl = document.querySelector(".problem");
const yourAnswerEl = document.querySelector(".your-answer");
const scoreEl = document.querySelector(".score");
const lifeEl = document.querySelector(".life");
const playerEl = document.querySelector(".player");
const monsterEl = document.querySelector(".monster");
const highScoreEl = document.querySelector(".high-score");

const dropdownCntEl = document.querySelectorAll(".dropdown-content p");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const operations = {
  "+": function (n1, n2) {
    return n1 + n2;
  },
  "-": function (n1, n2) {
    return n1 - n2;
  },
  "×": function (n1, n2) {
    return n1 * n2;
  },
  "÷": function (n1, n2) {
    return n1 / n2;
  },
};

op = dropdownCntEl[0].textContent;

console.log(operations[op](5, 2));

const newProb = function () {
  number1 = Math.trunc(Math.random() * 11 * level * 0.5);
  number2 = Math.trunc(Math.random() * 11 * level * 0.5);
  answer = number1 * number2;
  problem = `Q${counter}: What is ${number1} x ${number2}?`;
  problemEl.textContent = problem;
  yourAnswerEl.value = "";
  // yourAnswerEl.disabled = false;
  // yourAnswerEl.autofocus;
  changeImage(".monster", "./img/Sprite-0001b.gif");
  changeImage(".player", "./img/bw_girl_v3.gif");
  levelCheck();
};

function changeImage(targetClass, imgName) {
  document.querySelector(targetClass).src = imgName;
}

const levelCheck = function () {
  if (score % 10 === 0) {
    level++;
    // levelEl.textContent = `Level: ${level}`;

    monsterEl.style.height = `${level * 10 + 20}px`;
    slash.play();
  }
};

const init = function () {
  newProb();
  scoreEl.textContent = `Score: ${score}`;
  highScoreEl.textContent = `High Score: ${highscore}`;
  lifeEl.textContent = `Life: ${life}`;
};

checkAnswer = function () {
  output = yourAnswerEl.value;
  // yourAnswerEl.disabled = true;
  if (output === "") {
    yourAnswerEl.placeholder = "Enter a number!";
  } else {
    output = Number(yourAnswerEl.value);
    if (output === answer) {
      score++;
      scoreEl.textContent = `Score: ${score}`;
      changeImage(".monster", "./img/Sprite-0001c.gif");
      correct1.play();
    } else {
      life--;
      lifeEl.textContent = `Life: ${life}`;
      incorrect1.play();
      changeImage(".player", "./img/bw_girl_v3down.gif");
    }
    if (life === 0) {
      // showClass(gameOverEl);
      // console.log(showClass(overlayEl));
      // showClass(pressAEl);
      if (score > highscore) {
      }
      highscore = score;
      highScoreEl.textContent = `High Score: ${highscore}`;
    }
    setTimeout(newProb, 500);
    // newProb();
    counter++;
    yourAnswerEl.placeholder = "Your answer";
  }
  // yourAnswerEl.disabled = false;
  // yourAnswerEl.autofocus = true;
};

//  On Load
init();

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
    // console.log(score);
  }
});

document.addEventListener("click", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
    // console.log(score);
  }
});
