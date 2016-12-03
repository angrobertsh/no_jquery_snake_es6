import Board from './board';

export default class View{

  constructor(){
    this.board = new Board();
    document.addEventListener("keypress", this.handleKeyEvent)
    this.gamePlaying = window.setInterval(this.step.bind(this), 500);
  }

  handleKeyEvent(event){
    let pressedLetter = event.keyCode;
    switch(pressedLetter){
      case(87):
        this.board.snake.turn("N");
        return;
      case(65):
        this.board.snake.turn("W");
        return;
      case(83):
        this.board.snake.turn("S");
        return;
      case(68):
        this.board.snake.turn("E");
        return;
      default:
        return;
    }
  }

  step(){
    if(this.board.snake.move() === true){
      window.clearInterval(this.gamePlaying);
      alert("You lost!");
    } else {      
      this.board.render();
    }
  }

}
