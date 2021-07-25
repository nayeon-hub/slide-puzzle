const span = controlBox.querySelector("span");

// li에게 있는 숫자 순서와 answer 숫자 비교
function checkAnswer() {
  let check = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (li[i][j] !== answer[i][j]) {
        check = false;
        break;
      }
    }
    if (check === false) {
      break;
    }
  }

  // 만약 성공하면 SUCCESS
  if (check === false) {
    span.innerHTML = "";
    return true;
  } else {
    span.innerHTML = "Success";
  }
}

function changePosition(e, emptyBox, eR, eC, cR, cC) {
  console.log("hey");
  li[eR - 1].splice(eC - 1, 1, Number(e.target.innerText));
  li[cR - 1].splice(cC - 1, 1, "");
  e.target.style.gridRow = eR;
  e.target.style.gridColumn = eC;
  emptyBox.style.gridRow = cR;
  emptyBox.style.gridColumn = cC;
}

function getPosition(e) {
  const emptyBox = document.querySelector(".empty-piece");

  const clickRow = Number(
    window.getComputedStyle(e.target).gridRow.slice(0, 1)
  );

  const clickColumn = Number(
    window.getComputedStyle(e.target).gridColumn.slice(0, 1)
  );

  const emptyRow = Number(
    window.getComputedStyle(emptyBox).gridRow.slice(0, 1)
  );
  const emptyColumn = Number(
    window.getComputedStyle(emptyBox).gridColumn.slice(0, 1)
  );
  console.log(emptyRow, emptyColumn, clickRow, clickColumn);
  console.log("here");

  if (clickRow === emptyRow - 1 && clickColumn === emptyColumn) {
    changePosition(e, emptyBox, emptyRow, emptyColumn, clickRow, clickColumn);
  } else if (clickRow === emptyRow + 1 && clickColumn === emptyColumn) {
    changePosition(e, emptyBox, emptyRow, emptyColumn, clickRow, clickColumn);
  } else if (clickRow === emptyRow && clickColumn === emptyColumn - 1) {
    changePosition(e, emptyBox, emptyRow, emptyColumn, clickRow, clickColumn);
  } else if (clickRow === emptyRow && clickColumn === emptyColumn + 1) {
    changePosition(e, emptyBox, emptyRow, emptyColumn, clickRow, clickColumn);
  }
}
