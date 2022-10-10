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

      let x = 350;

      for (let i = 0; i < amount; i++) {
        ctx.drawImage(
          this.heart,
          x,
          10,

          this.heart.width,
          this.heart.height
        );
        console.log("ptööt" + amount);
        x = x + 80;
      }
    }
  };
}
