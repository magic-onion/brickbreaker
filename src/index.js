let player;
let ball;

function setup() {
  createCanvas(400, 400);

  player = new Player;
  ball = new Ball;
}

function draw() {
  // rectMode(CENTER)
  background(80, 80, 80);
  player.display();
  player.update()
  player.checkEdges()

  ball.display()
  ball.update()
  ball.checkEdges()
  ball.meets(player)
  if (ball.meets(player) && ball.direction.y > 0) {
    ball.direction.y *= -1
  }
}

function keyReleased() {
  player.isMovingLeft = false;
  player.isMovingRight = false;
}

function keyPressed() {
  if (key === "l" || key === "L") {
    player.isMovingRight = true;
  }
  else if (key === 'j' || key === "J") {
    player.isMovingLeft = true
  }
}
