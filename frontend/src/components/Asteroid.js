export default class Asteroid {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.hp = 3;
    this.width = 50;
    this.height = 50;
    this.speed = 2;

    this.lineJoin = "bevel";
    this.color = "#CA2C36";
    this.alive = true;
  }

  move = () => {
    this.y = this.y + this.speed;
  };

  takeHit = () => {
    this.hp--;

    if (this.hp === 2) {
      this.color = "#E83B47";
    }

    if (this.hp === 1) {
      this.color = "#FF3D4A";
    }

    if (this.hp <= 0) {
      this.destroy();
    }
  };

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.color;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
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
