import Laser from "./Laser";

export default class LaserWeapon {
  lasers = [];
  timer = 0;

  constructor(color, weaponSpeed, type) {
    this.color = color;
    this.weaponSpeed = weaponSpeed;
    this.type = type;
  }

  fire(x, y, speed) {
    if (this.timer <= 0) {
      this.lasers.push(new Laser(x, y, speed, this.color, this.type));

      this.timer = this.weaponSpeed;
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
    if (this.type === "enemy") {
      return laser.y >= 750;
    } else {
      return laser.y <= -laser.height;
    }
  }

  locations() {
    return this.lasers;
  }
}
