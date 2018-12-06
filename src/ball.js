class Ball {
  constructor() {
    this.pos = createVector(width/2, height/2)
    this.r = 7
    this.speed = 3
    this.vel = createVector(1, 1).mult(this.speed) //mult controls speed
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
    if (
      this.pos.y < player.pos.y &&
      this.pos.y > player.pos.y - this.r &&
      this.pos.x > (player.pos.x + player.w/2) - this.r &&
      this.pos.x < player.pos.x + player.w + this.r) {
      return 1
    }
    else if (
      this.pos.y < player.pos.y &&
      this.pos.y > player.pos.y - this.r &&
      this.pos.x > player.pos.x - this.r &&
      this.pos.x < (player.pos.x + player.w/2) + this.r) {
      return - 1
    }
    else {

      return false
    }
  }

  hits(brick) {
    let distance = dist(this.pos.x, this.pos.y, brick.pos.x, brick.pos.y)
    if (distance < this.r + brick.r) {
      return true;
    }
    else {
      return false;
    }
  }
}

//if paddle hit on right side, direction.x *= -1
//if paddle hits on left side, direction.x *= -1
//rows
//loss reset
//win reset
