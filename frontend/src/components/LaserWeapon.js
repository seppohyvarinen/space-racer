import Laser from "./Laser";

export default class LaserWeapon {
  lasers = [];
  timer = 0;

  constructor(color) {
    this.color = color;
  }

  fire(x, y, speed) {
    if (this.timer <= 0) {
      this.lasers.push(new Laser(x, y, speed, this.color));

      this.timer = 30;
    }

    this.timer--;
  }

  draw(ctx) {
    if (this.lasers.length !== 0) {
      this.lasers.forEach((laser) => {
        if (!laser.alive) {
          const index = this.lasers.indexOf(laser);
          this.lasers.splice(index, 1);
        }
        if (this.checkScreenBounds(laser)) {
          const index = this.lasers.indexOf(laser);
          this.lasers.splice(index, 1);
        }

        laser.draw(ctx);
      });
    }
  }
  checkScreenBounds(laser) {
    return laser.y <= -laser.height;
  }

  locations() {
    return this.lasers;
  }
}
