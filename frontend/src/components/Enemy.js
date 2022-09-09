export default class Enemy {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.shadowColor = "d53";
    this.shadowBlur = 200;
    this.lineJoin = "bevel";
    this.color = "black";
    this.alive = true;
  }

  move = () => {
    this.y = this.y + 1;
  };

  draw(ctx) {
    ctx.shadowColor = "green";
    ctx.shadowBlur = 300;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.fillStyle = this.color;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
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
