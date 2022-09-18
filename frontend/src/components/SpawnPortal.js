import Asteroid from "./Asteroid";

export default class SpawnPortal {
  asteroids = [];
  spawnTimer = 0;

  newAsteroid() {
    if (this.spawnTimer <= 0) {
      this.asteroids.push(
        new Asteroid(Math.floor(Math.random() * (550 - 0 + 1)) + 0)
      );
      this.spawnTimer = 300;
    }
    this.spawnTimer--;
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
  }

  locations() {
    return this.asteroids;
  }
}
