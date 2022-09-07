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
}
