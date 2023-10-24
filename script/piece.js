function generatePieceHtml(pieceIndex, color) {

    let piece = pieces[pieceIndex];
    let [pieceHeight, pieceWidth] = [piece.length, piece[0].length];

    let pieceGridHtmlElement = document.createElement("div");
    pieceGridHtmlElement.className = "piece";
    pieceGridHtmlElement.style.gridTemplate = `repeat(${pieceHeight}, 1fr) / repeat(${pieceWidth}, 1fr)`;
    pieceGridHtmlElement.style.height = `calc(var(--piece-size) * ${pieceHeight})`;
    pieceGridHtmlElement.style.width = `calc(var(--piece-size) * ${pieceWidth})`;

    for (let i=0; i<pieceHeight; i++) for (let j=0; j<pieceWidth; j++) if (piece[i][j] === 1) {

        let pieceUnitHtmlElement = document.createElement("div");

        pieceUnitHtmlElement.className = "pieceUnit pieceUnitFill";

        pieceUnitHtmlElement.style.backgroundColor = color;
        pieceUnitHtmlElement.style.gridArea = `${i+1} / ${j+1} / ${i+2} / ${j+2}`;

        let pieceUnitOverHtmlElement = document.createElement("div");
        pieceUnitHtmlElement.appendChild(pieceUnitOverHtmlElement);

        pieceGridHtmlElement.appendChild(pieceUnitHtmlElement);
    }

    return pieceGridHtmlElement;
};

function changePieceSize() {
    document.querySelector(":root").style.setProperty("--piece-size", `${boardHtmlElement.clientHeight / 20}px`);
}

function onPieceClick(pieceIndex, color) {
    return (event) => {
        piecePicked.index = pieceIndex;
        piecePickedHtmlElement.innerHTML = "";
        piecePickedHtmlElement.className = "piece";
        piecePickedHtmlElement.appendChild(generatePieceHtml(pieceIndex, color));
    }
}

function movePickedPiece(event) {
    console.log(event);
}