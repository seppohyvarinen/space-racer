export default class Enemy {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.shadowColor = "d53";
    this.shadowBlur = 200;
    this.lineJoin = "bevel";
    this.color = "red";
  }

  move = () => {
    this.y = this.y + 1;
  };

  draw(ctx) {
    ctx.shadowColor = "d53";
    ctx.shadowBlur = 200;
    ctx.lineJoin = "bevel";
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
