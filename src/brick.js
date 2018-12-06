class Brick {
  constructor() { //pass in x and y
    this.r = 17
    this.x // =x
    this.y //= y
    this.pos = createVector(random(10, width - 10), random(20, height-200))
    this.total = 5
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(1.54)
    beginShape();
    for (let i = 0; i < this.total; i++) {
      let angle = map(i, 0, this.total, 0, TWO_PI);
      let x = this.r * cos(angle);
      let y = this.r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE)
    pop()
  }




}
