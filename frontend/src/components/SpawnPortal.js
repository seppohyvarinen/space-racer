import Enemy from "./Enemy";

export default class SpawnPortal {
  enemies = [];
  spawnTimer = 0;

  newEnemy() {
    if (this.spawnTimer <= 0) {
      this.enemies.push(
        new Enemy(Math.floor(Math.random() * (550 - 0 + 1)) + 0)
      );
      this.spawnTimer = 150;
    }
    this.spawnTimer--;
  }
  moveAll(ctx) {
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

  locations() {
    return this.enemies;
  }
}
