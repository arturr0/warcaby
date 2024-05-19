let Board = [];

function Area(rectCenter, row, column, isBlack, free) {
  this.rectCenter = rectCenter;
  this.row = row;
  this.column = column;
  this.isBlack = isBlack;
  this.free = true;
}

let areaCenter = 60;
let row = 0;
let column = 0;

let Pawns = [];

function Pawn (rectCenter, row, column, isRed, queen) {
  this.rectCenter = rectCenter;
  this.row = row;
  this.column = column;
  this.isRed = isRed;
  this.queen = queen;
}

function setup() {
  const myCanvas = createCanvas(544, 544);
  myCanvas.parent('game');
  rectMode(CENTER); // Set rectangle mode to CENTER
  background(220); // Initial background

  let isBlack = true;

  for (let i = 0; i < 8; i++) {
    row++;
    column = 0;
    isBlack = !isBlack; // Alternate the starting color for each row

    for (let j = 0; j < 8; j++) {
      let rectCenter = column * 68 + 34;
      column++;
      let area = new Area(rectCenter, row, column, isBlack);
      Board.push(area);
      
      isBlack = !isBlack; // Alternate the color for each square
      
    }
  }
  for (let j = 0; j < Board.length; j++) {
    
    if (Board[j].isBlack && Board[j].row < 4) {
      Board[j].free = false;
      let pawn = new Pawn(Board[j].rectCenter, Board[j].row, Board[j].column, true, false);
      Pawns.push(pawn)
    }
    else if (Board[j].isBlack && Board[j].row > 5) {
      Board[j].free = false;
      let pawn = new Pawn(Board[j].rectCenter, Board[j].row, Board[j].column, false, false);
      Pawns.push(pawn)
    }
  }
  
  //console.log(Pawns);
}

function draw() {
  background(220); // Clear the canvas on each frame

  for (let i = 0; i < Board.length; i++) {
    let color = Board[i].isBlack ? 0 : 255; // Set color based on whether it's a black or white square
    fill(color);
    rect(Board[i].rectCenter, Board[i].row * 68 - 34, 68, 68);
  }
  for (let i = 0; i < Pawns.length; i++) {
    if (Pawns[i].isRed) {
      fill(255,0,0);
      circle(Pawns[i].rectCenter, Pawns[i].row * 68 - 34, 50);
    }
    else {
      fill(0,255,0);
      circle(Pawns[i].rectCenter, Pawns[i].row * 68 - 34, 50);
    }
  }
}
console.log(Board);