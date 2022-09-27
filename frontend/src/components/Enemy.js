export default class Enemy {
  constructor(x, id, weapon) {
    this.x = x;
    this.y = 0;
    this.speed = 0.5;

    this.width = 40;
    this.height = 40;
    this.depth = Math.floor(Math.random() * (100 - 0 + 1)) + 100;
    this.color = "green";
    this.alive = true;
    this.goingLeft = true;
    this.id = id;
    this.weapon = weapon;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.weapon.draw(ctx);
  }

  shoot = () => {
    this.weapon.fire(this.x + 20, this.y + 15, 1.5);
  };

  move() {
    if (this.y < this.depth) {
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
