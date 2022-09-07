import { useEffect, useRef } from "react";

let x = 230;
let leftPressed = false;
let rightPressed = false;
const Game = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const handleKeyDown = (event) => {
        let key;
        if (event !== undefined) {
          key = event.keyCode;
        }

        if (key == 37) {
          event.preventDefault();
          leftPressed = true;
        }
        if (key == 39) {
          event.preventDefault();
          rightPressed = true;
        }
      };

      const handleKeyUp = (event) => {
        let key;
        if (event !== undefined) {
          key = event.keyCode;
        }

        if (key == 37) {
          leftPressed = false;
        }
        if (key == 39) {
          rightPressed = false;
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);

      let ship = new Image();
      ship.src = require("../assets/ship.png");
      ship.onload = () => {
        const canvas = canvasRef.current;
        canvas.width = 600;
        canvas.height = 800;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.drawImage(ship, x, 650, 140, 140);
        if (leftPressed) {
          x--;
        }
        if (rightPressed) {
          x++;
        }

        requestAnimationFrame(render);
      };
    };

    render();
  }, []);

  return (
    <div className="gameScreen">
      <div className="infoBoard">info here</div>
      <div className="canvasCrate">
        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>

      <div className="gameControls">controls here</div>
    </div>
  );
};

export default Game;
