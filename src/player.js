class Player {
  constructor() {
    this.w = 70
    this.h = 12
    this.pos = createVector(width/2, height-20)
    this.isMovingLeft = false;
    this.isMovingRight = false;
  }

  display() {
    rect(this.pos.x, this.pos.y, this.w, this.h)
  }

  update() {
    if (this.isMovingLeft) {
      this.move(-7)
    }
    else if (this.isMovingRight) {
      this.move(7)
    }
  }

  move(step) {
    this.pos.x += step
  }

  checkEdges() {
    if (this.pos.x <=0) {
      this.pos.x = 0
    }
    else if (this.pos.x + this.w >= width) {
      this.pos.x = width-this.w
    }
  }

}
