export default class Player {
  constructor(weapon, x) {
    this.ship = new Image();
    this.ship.src = require("../assets/Valmissaucer.png");

    this.ready = false;
    this.ship.onload = () => {
      this.ship.width = 140;
      this.ship.height = 140;
      this.ready = true;
    };

    this.weapon = weapon;
    this.x = x;
    this.y = 650;
    this.speed = 4;
  }
  draw = (ctx) => {
    ctx.beginPath();
    this.ready &&
      ctx.drawImage(this.ship, this.x, 650, this.ship.width, this.ship.height);
  };

  shoot = () => {
    this.weapon.fire(this.x + 70, this.y, 4);
  };

  controls = (leftPressed, rightPressed, shooting) => {
    if (leftPressed) {
      if (this.checkScreenBoundsLeft()) {
        this.x = this.x - this.speed;
      }
    }
    if (rightPressed) {
      if (this.checkScreenBoundsRight()) {
        this.x = this.x + this.speed;
      }
    }

    if (shooting) {
      this.shoot();
    }
  };

  checkScreenBoundsLeft() {
    return this.x > 0 - 35;
  }
  checkScreenBoundsRight() {
    return this.x < 600 - 105;
  }
}
