export default class Enemy {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.speed = 0.5;

    this.width = 40;
    this.height = 40;
    this.color = "green";
    this.alive = true;
    this.goingLeft = true;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (this.y < 100) {
      this.y += this.speed;
    }

    if (this.goingLeft) {
      this.x -= this.speed;

      if (this.x <= 0) {
        this.changeDirection();
      }
    } else {
      this.x += this.speed;

      if (this.x >= 550) {
        this.changeDirection();
      }
    }
  }

  changeDirection() {
    this.goingLeft = !this.goingLeft;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  destroy() {
    this.alive = false;
  }
}
