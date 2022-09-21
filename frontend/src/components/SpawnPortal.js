import Asteroid from "./Asteroid";
import Enemy from "./Enemy";

export default class SpawnPortal {
  asteroids = [];
  enemies = [];
  spawnTimer = 0;

  enemyTimer = 2000;

  spawning() {
    if (this.spawnTimer <= 0) {
      let newX = Math.floor(Math.random() * (550 - 0 + 1)) + 0;
      while (newX === -1) {
        newX = this.checkForOverLapping(
          Math.floor(Math.random() * (550 - 0 + 1)) + 0
        );
      }

      this.asteroids.push(new Asteroid(newX));
      this.spawnTimer = 300;
    }
    this.spawnTimer--;

    if (this.enemyTimer <= 0) {
      this.enemies.push(
        new Enemy(Math.floor(Math.random() * (550 - 0 + 1)) + 0)
      );
      this.enemyTimer = 1000;
    }

    this.enemyTimer--;
  }
  moveAll(ctx) {
    if (this.asteroids.length !== 0) {
      this.asteroids.forEach((asteroid) => {
        if (!asteroid.alive) {
          const index = this.asteroids.indexOf(asteroid);
          this.asteroids.splice(index, 1);
        }
        asteroid.alive && asteroid.move();
        asteroid.alive && asteroid.draw(ctx);
      });
    }

    if (this.enemies.length !== 0) {
      this.enemies.forEach((enemy) => {
        if (!enemy.alive) {
          const index = this.enemies.indexOf(enemy);
          this.enemies.splice(index, 1);
        }
        enemy.alive && enemy.move();
        enemy.alive && enemy.draw(ctx);
      });
    }
  }

  checkForOverLapping(x) {
    if (this.enemies.length !== 0) {
      this.enemies.forEach((enemy) => {
        if (enemy.x + 60 >= x || enemy.x - 20 < x) {
          return x;
        }
      });
    }
    return -1;
  }

  locations() {
    return this.asteroids;
  }
}
