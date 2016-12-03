export default class Coord{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  plus(coord){
    return new Coord(coord.x + this.x, coord.y + this.y);
  }

  equals(coord){
    return (this.y === coord.y && this.x === coord.x);
  }

  isOpposite(coord){
    return ((this.y * -1 === coord.y) && (this.x * -1 === coord.x));
  }
}
