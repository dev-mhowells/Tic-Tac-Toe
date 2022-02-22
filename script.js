"use strict";

const container = document.getElementById("container");
const a1 = document.getElementsByClassName("a1");

const boxes = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
const player1List = [];
const player2List = [];
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

function matches(arr, arr2) {
  return arr.every((i) => arr2.includes(i));
}

// const endGame = function () {
//   box.style.backgroundColor = "black";
// };

const checkForWinner = function (currentPlayer) {
  for (let winCondition of winningConditions) {
    const foundMatch = matches(winCondition, currentPlayer);
    if (foundMatch === true) {
      // if (player1Active === true) {
      //   prompt("pink wins");
      // } else if (player2Active === true) {
      //   alert("blue wins");
      // }
      // endGame();
      alert("YOU WIN");
      isWinner = true;
      break;
    }
  }
};

const checkForDraw = function () {
  if (player1List.length === 5 && isWinner === false) {
    alert("DRAW");
    isDraw = true;
  }
};

// STARTING CONDITIONS
let player1Active = true;
let player2Active = false;
let isWinner = false;
let isDraw = false;

const setup = (function () {
  // CREATE BOARD
  for (let n = 0; n < boxes.length; n++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.classList.add(`${boxes[n]}`);
    container.appendChild(box);

    // CLICK FUNCTIONALITY
    box.addEventListener(
      "click",
      function () {
        if (isWinner === false && isDraw === false) {
          if (player1Active) {
            box.style.backgroundColor = "pink";
            // alert("check");
            player1List.push(box.classList[1]);
            checkForWinner(player1List);
            checkForDraw();
            // console.log(loggedX);
            player1Active = false;
            player2Active = true;
          } else if (player2Active) {
            box.style.backgroundColor = "blue";
            player2List.push(box.classList[1]);
            checkForWinner(player2List);
            checkForDraw();
            // console.log(loggedO);
            player2Active = false;
            player1Active = true;
          }
        }

        // console.log(player1Active);
        // console.log(box.getElementsByClassName);
      },
      { once: true }
    );
  }
})();

// console.log("testing", loggedX.includes(loggedX.every(boxes)));
// console.log("testing", loggedX.includes("b"));
// const includes = function () {
//   loggedX.includes("a");
// };
// console.log(loggedX.every(includes));

//is everything in a, in b?
// console.log(matches(loggedO, loggedX));

// if (a1.textContent === "TEST") {
//   console.log("pink wins");
// }
