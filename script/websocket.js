function initWebSocket() {
    const webSocketURL = "ws://localhost:4050";

    const socket = new WebSocket(webSocketURL);

    socket.addEventListener("message", (event) => {

        let data = JSON.parse(event.data);

        if (data?.type === undefined) console.error("Unkown message recieve");
        else if (data.type === "init") initGameStates(data);
        else if (data.type === "update") updateGamStates(data);
        else console.error("Unkown message recieve");
    });

    socket.addEventListener("error", console.error);
}

function initGameStates(data) {

    const {names, colors, maxTurnTime, turnTime} = data;

    if (names === undefined || colors === undefined || maxTurnTime === undefined || turnTime === undefined) {

        console.error("Wrong data recieve");
        return;
    }

    playerColors = colors;
    playerNames = names;

    updateGamStates(data);
}

function updateGamStates(data) {

    const {board, piecesList, currentPlayer} = data;

    if (board === undefined || piecesList === undefined || currentPlayer === undefined) {

        console.error("Wrong data recieve");
        return;
    }

    // update board

    for (let i=0; i<board.length; i++) { for (let j=0; j<board[i].length; j++) {
        
        let boardUnitHtmlElement = boardHtmlElement.children[i*board.length + j];

        boardUnitHtmlElement.className = "pieceUnit " + (board[i][j] ? "pieceUnitFill" : "pieceUnitEmpty");

        if (board[i][j] > 0) boardUnitHtmlElement.style.backgroundColor = playerColors[board[i][j]-1];
    }}

    //update pieces list

    piecesPlayersListHtmlElement.forEach((piecesList) => piecesList.innerHTML = "");

    for (let player=0; player<piecesList.length; player++) for(let i=0; i<piecesList[player].length; i++) {

        let pieceHtmlElement = generatePieceHtml(piecesList[player][i], playerColors[player]);

        pieceHtmlElement.addEventListener("click", onPieceClick(i, playerColors[player]));

        piecesPlayersListHtmlElement[player].appendChild(pieceHtmlElement);
    }

    //update current player

    currentPlayerHtmlElement.innerText = "Au tour de " + playerNames[currentPlayer];
}