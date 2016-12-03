import Snake from './snake';

export default class Board{
  constructor(){
    this.snake = new Snake();
    this.apples = [];
    this.dimensions = [20, 20];
    this.render();
  }

  render(){
    let board = document.getElementById("board");
    board.innerHTML = "";
    for(let i = 0; i < this.dimensions[0]; i += 1){
      let rowName = i;
      let newRow = document.createElement("LI");
      newRow.id=`row${rowName}`;
      newRow.className='row';
      board.appendChild(newRow);
      let currentRow = document.getElementById(`row${rowName}`);
      for(let j = 0; j < this.dimensions[1]; j+= 1){
        let colName = j;
        let newCell = document.createElement("div");
        newCell.id = `row${rowName}col${colName}`;
        newCell.className = 'cell empty';
        currentRow.appendChild(newCell);
      }
    }
    this.insertSnake();
  }

  insertSnake(){
    let snakeCoords = this.snake.segments;
    let x;
    let y;
    let snakeSeg;
    for(let i = 0; i < snakeCoords.length; i += 1){
      x = snakeCoords[i].x
      y = snakeCoords[i].y
      snakeSeg = document.getElementById(`row${x}col${y}`);
      snakeSeg.className = 'cell snake';
    }
  }

}

//
// <div id='board'>
//   <li class="row" id='row1'>
//     <div id="row0col0" class="cell empty"> //20 of these divs to represent cells
//     <div id="row0col1" class="cell empty">
//     ...
//     <div id="row0col11" class="cell empty"> //20 of these divs to represent cells
//     ...
//   </li>
//   <li class="row" id="row2">
//     <div id="row1col0" class="cell empty"> //20 of these divs to represent cells
//     ...
//   <li class="row" id="row10">
//     ...
//     <div id="row10col10" class="cell snake">
//     ...
//   </li>
//
//   ...
// </div>
