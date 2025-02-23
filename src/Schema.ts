class Box {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

class Schema {
  boxes: Box[];

  constructor() {
    this.boxes = [];
  }

  add(x: number, y: number, width: number, height: number) {
    this.boxes.push(new Box(x, y, width, height));
  }
}

export { Schema, Box }; 