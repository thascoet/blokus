const webSocketURL = "ws://localhost:4050";

const socket = new WebSocket(webSocketURL);

socket.addEventListener("message", updateGameStates);

function updateGameStates(dataString) {

    const {board, piecesList, gameInfo} = JSON.parse(dataString);

    // update board

    for (let i=0; i<board.length; i++) for (let j=0; j<board.length[i]; j++) {
        
        let boardUnitHtmlElement = boardHtmlElement.children[i*board.length + j];

        boardUnitHtmlElement = "boardUnit " + board[i][j] ? "boardUnitFill" : "boardUnitEmpty";

        if (board[i][j]) boardUnitHtmlElement.style.backgroundColor = gameInfo.colors[board[i][j]-1];
    }

    for (let player=0; player<piecesList.length; player++) for(let pieceIndex=0; pieceIndex<piecesList[player].length; pieceIndex++) {

    }
}