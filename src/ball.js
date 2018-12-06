class Ball {
  constructor() {
    this.pos = createVector(width/2, height/2)
    this.r = 10
    this.vel = createVector(1, 1).mult(2.5) //mult controls speed
    this.direction = createVector(1,1)
  }

  update() {
    this.pos.x += this.vel.x * this.direction.x
    this.pos.y += this.vel.y * this.direction.y
  }

  display() {
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
  }

  checkEdges() {
    if (this.pos.y < this.r && this.direction.y < 0) {
      this.direction.y *= -1
    }
    else if (this.pos.x < this.r && this.direction.x < 0) {
      this.direction.x *= -1
    }
    else if (this.pos.x > width - this.r && this.direction.x > 0) {
      this.direction.x *= -1
    }
  }

  meets(player) {
    if (this.pos.y < player.pos.y && this.pos.y > player.pos.y - this.r && this.pos.x > player.pos.x - this.r && this.pos.x < player.pos.x + player.w + this.r) {
      return true
    }
    else {
      return false
    }
  }

  hits() {

  }
}
