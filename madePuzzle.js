const controlBox = document.querySelector(".puzzle-control");
const startBtn = controlBox.querySelector("button");
const puzzleList = document.querySelectorAll(".puzzle-piece");

const answer = [1, 2, 3, 4, 5, 6, 7, 8];
let li = [];

function madeQus() {
  li = [];
  while (li.length < 8) {
    const n = Math.floor(Math.random() * 8) + 1;
    const check = li.indexOf(n);
    if (check === -1) {
      li.push(n);
    }
  }
  li = [li.slice(0, 3), li.slice(3, 6), li.slice(6, 8)];
  li[2].push("Null");
  return li;
}

function showPuzzle(p) {
  let x = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (li[i][j] !== "Null") {
        puzzleList[x].innerHTML = li[i][j];
      }
      x += 1;
    }
  }
}

function gameStart() {
  console.log("game start!");
  const puzzle = madeQus();
  showPuzzle(puzzle);
}

startBtn.addEventListener("click", gameStart);
