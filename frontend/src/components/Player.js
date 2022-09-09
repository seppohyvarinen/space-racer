export default class Player {
  constructor(weapon, x) {
    this.ship = new Image();
    this.ship.src = require("../assets/ship.png");
    this.ready = false;
    this.ship.onload = () => {
      this.ready = true;
    };

    this.weapon = weapon;
    this.x = x;
  }
  draw = (ctx) => {
    this.ready && ctx.drawImage(this.ship, this.x, 650, 140, 140);
  };

  shoot = () => {
    this.weapon.fire(this.x + 70, 650, 3);
  };

  controls = (leftPressed, rightPressed, shooting) => {
    if (leftPressed) {
      if (this.checkScreenBoundsLeft()) {
        this.x = this.x - 2;
      }
    }
    if (rightPressed) {
      if (this.checkScreenBoundsRight()) {
        this.x = this.x + 2;
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
