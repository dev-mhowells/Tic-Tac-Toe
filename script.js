"use strict";

const container = document.getElementById("container");
const title = document.getElementById("title");
const resetButton = document.getElementById("reset-button");

const turnIndicator = document.querySelector(".turn-indicator");
const player1Indicator = document.querySelector(".big-x");
const player2Indicator = document.querySelector(".big-o");

const boxes = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
let player1List = [];
let player2List = [];
const winningConditions = [
  ["a1", "a2", "a3"],
  ["b1", "b2", "b3"],
  ["c1", "c2", "c3"],
  ["a1", "b1", "c1"],
  ["a2", "b2", "c2"],
  ["a3", "b3", "c3"],
  ["a1", "b2", "c3"],
  ["a3", "b2", "c1"],
];

// WORK ON THIS OR REMOVE IT!
const clicker = function (playerList) {
  playerList.push(box.classList[1]);
  checkForWinner(playerList);
  checkForDraw();
};

// MAIN FUNCTIONS ----------------------------------------------------------------

function matches(arr, arr2) {
  return arr.every((i) => arr2.includes(i));
}

const checkForWinner = function (currentPlayer) {
  for (let winCondition of winningConditions) {
    const foundMatch = matches(winCondition, currentPlayer);
    if (foundMatch === true) {
      if (player1Active === true) {
        title.textContent = "X wins !!";
      } else if (player2Active === true) {
        title.textContent = "O wins !!";
      }
      isWinner = true;
    }
  }
};

const checkForDraw = function () {
  if (player1List.length === 5 && isWinner === false) {
    title.textContent = "Draw";
    isDraw = true;
  }
};

const boxa = document.getElementsByClassName("box");

const playAgain = function () {
  if (isWinner === true || isDraw === true) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    isDraw = true;
    player1Active = true;
    player2Active = false;
    isWinner = false;
    isDraw = false;
    player1Indicator.classList.add("show-active");
    player2Indicator.classList.remove("show-active");
    player1List = [];
    player2List = [];
    setup();
  }
};

const swtitchInidicator = function () {
  if (player1Active) {
    player1Indicator.classList.remove("show-active");
    player2Indicator.classList.add("show-active");
    player1Active = false;
    player2Active = true;
  } else if (player2Active) {
    player2Indicator.classList.remove("show-active");
    player1Indicator.classList.add("show-active");
    player2Active = false;
    player1Active = true;
  }
};

// STARTING CONDITIONS --------------------------

let player1Active = true;
player1Indicator.classList.add("show-active");
let player2Active = false;
let isWinner = false;
let isDraw = false;

// GAME FUNCTIONALITY -----------------------------

const setup = function () {
  // CREATE BOARD

  for (let n = 0; n < boxes.length; n++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = "white";
    box.classList.add(`${boxes[n]}`);
    container.appendChild(box);

    // CLICK FUNCTIONALITY
    box.addEventListener(
      "click",
      function () {
        if (isWinner === false && isDraw === false) {
          if (player1Active) {
            // box.style.backgroundColor = "pink";
            box.textContent = "X";
            player1List.push(box.classList[1]);
            checkForWinner(player1List);
            checkForDraw();
            swtitchInidicator();
          } else if (player2Active) {
            // box.style.backgroundColor = "blue";
            box.textContent = "O";
            player2List.push(box.classList[1]);
            checkForWinner(player2List);
            checkForDraw();
            swtitchInidicator();
          }
        }
      },
      { once: true }
    );
  }
};

resetButton.addEventListener("click", function () {
  title.textContent = "Naughts and Crosses";
  playAgain();
});

setup();
