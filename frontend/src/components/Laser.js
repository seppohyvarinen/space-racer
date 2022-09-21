export default class Laser {
  constructor(x, y, speed, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;

    this.width = 5;
    this.height = 20;
    this.color = color;
    this.alive = true;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    this.y -= this.speed;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
