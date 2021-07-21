function changePosition(e, emptyBox, eR, eC, cR, cC) {
  console.log("active");
  console.log(eR, eC, cR, cC);
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

puzzleList.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    getPosition(e);
  });
});
