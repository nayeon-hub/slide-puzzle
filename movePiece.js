const span = controlBox.querySelector("span");

function changePosition(e, emptyBox, eR, eC, cR, cC) {
  li[eR - 1].splice(eC - 1, 1, Number(e.target.innerText));
  li[cR - 1].splice(cC - 1, 1, "");
  e.target.style.gridRow = eR;
  e.target.style.gridColumn = eC;
  emptyBox.style.gridRow = cR;
  emptyBox.style.gridColumn = cC;
  console.log(li);
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

function init() {
  puzzleList.forEach((elm) => {
    elm.addEventListener("click", (e) => {
      getPosition(e);
    });
  });
}
init();
