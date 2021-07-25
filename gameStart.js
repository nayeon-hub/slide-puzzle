function allReset() {
  puzzleList.forEach((elm, indx) => {
    if (!elm.classList[1]) {
      elm.innerHTML = indx + 1;
    }
    elm.style.gridColumn = "";
    elm.style.gridRow = "";
    span.innerHTML = "";
  });
}

function gameStart(e) {
  console.log("game start!");

  //game을 진행하던 도중 start를 눌렀을 경우, 완전히 리셋 -> 자리, 숫자
  allReset();

  // 퍼즐 무작위 생성
  const puzzle = madeQus();

  // 무작위로 생성한 퍼즐 보여주기
  showPuzzle(puzzle);

  // 퍼즐을 클릭하면 이동이벤트 발생
  puzzleList.forEach((elm) => {
    elm.addEventListener("click", (e) => {
      //정답 확인
      console.log(e.target);
      let check = checkAnswer();
      if (check) {
        console.log(e.target);
        // 퍼즐의 위치 확인 후 이동
        getPosition(e);
      }
      checkAnswer();
    });
  });
}

function init() {
  startBtn.addEventListener("click", gameStart);
}

init();
