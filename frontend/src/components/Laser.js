export default class Laser {
  constructor(x, y, speed, color, type) {
    this.x = x;
    this.y = y;
    this.speed = speed;

    this.width = 5;
    this.height = 20;
    this.color = color;
    this.alive = true;
    this.type = type;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    this.move();
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (this.type === "enemy") {
      this.y += this.speed;
    } else {
      this.y -= this.speed;
    }
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
