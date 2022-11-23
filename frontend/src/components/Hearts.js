export default class Hearts {
  constructor() {
    this.heart = new Image();
    this.heart.src = require("../assets/heart.png");

    this.ready = false;
    this.heart.onload = () => {
      this.heart.width = 80;
      this.heart.height = 80;
      this.ready = true;
    };
  }
  draw = (ctx, amount) => {
    if (this.ready) {
      ctx.beginPath();

      let x = 500;

      for (let i = 0; i < amount; i++) {
        ctx.drawImage(
          this.heart,
          x,
          10,

          this.heart.width,
          this.heart.height
        );
        x = x - 80;
      }
    }
  };
}
