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

function updateBoard(board, colors) {

    for (let i = 0; i < boardY; i++) {

        for (let j = 0; j < boardX; j++) {

            if (board[i][j] > 0) {

                boardHtmlElement.children[i*boardY+j].style.backgroundColor = colors[(board[i][j] - 1) % 4];
                boardHtmlElement.children[i*boardY+j].firstChild.backgroundImage = `url(${piecePngUrl})`;
                
            } else {

                boardHtmlElement.children[i*boardY+j].style.backgroundColor = "transparent";
                boardHtmlElement.children[i*boardY+j].firstChild.backgroundImage = "none";
            }
        }
    }
}