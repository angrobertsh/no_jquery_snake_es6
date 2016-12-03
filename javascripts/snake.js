import Coord from './coord'

export default class Snake{
  constructor(){
    this.direction = "N";
    this.segments = [new Coord(7, 10), new Coord(8, 10), new Coord(9, 10), new Coord(10, 10)];
  }

  move(){
    this.segments.splice(this.segments.length-1, 1);
    this.segments.unshift(this.segments[0].plus(this.dirToCoord(this.direction)));
    return this.outOfBounds(this.segments[0]);
  }

  dirToCoord(dir){
    switch (dir){
      case "N":
        return new Coord(-1, 0);
      case "S":
        return new Coord(1, 0);
      case "E":
        return new Coord(0, 1);
      default:
        return new Coord(0, -1);
    }
  }

  turn(newDir){
    if(this.dirToCoord(newDir).isOpposite(this.dirToCoord(this.direction))){
      return;
    } else {
      this.direction = newDir;
    }
  }

  outOfBounds(coord){
    let x = coord.x;
    let y = coord.y;
    if(x < 0 || x > 19){
      return true
    }
    if(y < 0 || y > 19){
      return true;
    }
    return false;
  }

}
