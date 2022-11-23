export default class Enemy {
  constructor(x, id, weapon, lv) {
    this.x = x;
    this.y = 0;
    this.speed = Math.round(3);

    this.ship = new Image();
    this.ship.src = require("../assets/Enemy.png");
    this.ready = false;
    this.ship.onload = () => {
      this.ship.width = 100;
      this.ship.height = 100;
      this.ready = true;
    };

    this.depth = Math.floor(Math.random() * (100 - 0 + 1)) + 100;
    this.alive = true;
    this.goingLeft = true;
    this.id = id;
    this.weapon = weapon;
    this.hp = lv;
  }

  draw(ctx) {
    ctx.beginPath();

    this.ready &&
      ctx.drawImage(
        this.ship,
        this.x,
        this.y,
        this.ship.width,
        this.ship.height
      );
    this.ready && this.weapon.draw(ctx);
  }

  shoot = () => {
    this.weapon.fire(this.x + 20, this.y + 15, 3);
  };

  takeHit = () => {
    this.hp--;

    if (this.hp <= 0) {
      this.destroy();
    }
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
