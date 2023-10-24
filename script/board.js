function initBoard() {

    boardHtmlElement.style.gridTemplate = `repeat(${boardY}, 1fr) / repeat(${boardX}, 1fr)`;

    for (let i = 0; i < boardX * boardY; i++) {

        let boardCell = document.createElement("div");
        boardCell.className = "boardCell";

        let boardCellOver = document.createElement("div");
        boardCellOver.className = "boardCellOver";

        boardCell.appendChild(boardCellOver);
        boardHtmlElement.appendChild(boardCell);
    }
}