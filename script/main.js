const piecePickedHtmlElement = document.getElementById("piecePicked");
const boardHtmlElement = document.getElementById("board");
const boardButtonRotateClockwiseHtmlElement = document.getElementById("boardButtonRotateClockwise");
const boardButtonRotateCounterclockwiseHtmlElement = document.getElementById("boardButtonRotateCounterclockwise");
const boardButtonFlipHorizontalHtmlElement = document.getElementById("boardButtonFlipHorizontal");
const boardButtonFlipVerticalHtmlElement = document.getElementById("boardButtonFlipVertical");
const boardButtonValidateHtmlElement = document.getElementById("boardButtonValidate");
const currentPlayerHtmlElement = document.getElementById("currentPlayer");
const timerHtmlElement = document.getElementById("timer");
const player1NameHtmlElement = document.getElementById("player1Name");
const player2NameHtmlElement = document.getElementById("player2Name");
const player3NameHtmlElement = document.getElementById("player3Name");
const player4NameHtmlElement = document.getElementById("player4Name");
const unitRemainingNumberHtmlElement = document.getElementById("unitRemainingNumber");
const piecesListPlayer1HtmlElement = document.getElementById("piecesListPlayer1");
const piecesListPlayer2HtmlElement = document.getElementById("piecesListPlayer2");
const piecesListPlayer3HtmlElement = document.getElementById("piecesListPlayer3");
const piecesListPlayer4HtmlElement = document.getElementById("piecesListPlayer4");
const piecesPlayersListHtmlElement = [piecesListPlayer1HtmlElement, piecesListPlayer2HtmlElement, piecesListPlayer3HtmlElement, piecesListPlayer4HtmlElement]
const displayMessageHtmlElement = document.getElementById("displayMessage");

const piecePicked = {
    index: -1,
    orientation: 0
};

const piecePngUrl = "./resource/piece.png";

const boardX = 20;
const boardY = 20;

let playerNames = ["", "", "", ""];
let playerColors = ["", "", "", ""];

let board = Array(boardY).fill(0).map(() => Array(boardX).fill(0));

initBoard();
initWebSocket();

changePieceSize();
window.addEventListener("resize", changePieceSize);
window.addEventListener("mousemove", movePickedPiece);