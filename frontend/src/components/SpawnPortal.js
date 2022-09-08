import Enemy from "./Enemy";

export default class SpawnPortal {
  enemies = [];
  spawnTimer = 0;

  newEnemy() {
    if (this.spawnTimer <= 0) {
      this.enemies.push(
        new Enemy(Math.floor(Math.random() * (650 - 0 + 1)) + 0)
      );
      this.spawnTimer = 150;
    }
    this.spawnTimer--;
  }
  moveAll(ctx) {
    if (this.enemies.length !== 0) {
      this.enemies.forEach((enemy) => {
        enemy.move();
        enemy.draw(ctx);
      });
    }
  }
}
