import { useEffect, useRef } from "react";
import Laser from "./Laser";
import LaserWeapon from "./LaserWeapon";
import Player from "./Player";

let x = 230;
let leftPressed = false;
let rightPressed = false;
let shooting = false;
let wpn = new LaserWeapon();
let player = new Player(wpn, x);
const Game = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      addControls();

      const canvas = canvasRef.current;
      canvas.width = 600;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");

      const setStyle = () => {
        ctx.shadowColor = "d53";
        ctx.shadowBlur = 20;
        ctx.lineJoin = "bevel";
      };

      setStyle();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      player.draw(ctx, x);
      wpn.draw(ctx);

      if (leftPressed) {
        player.x = player.x - 2;
      }
      if (rightPressed) {
        player.x = player.x + 2;
      }

      if (shooting) {
        player.shoot();
      }

      requestAnimationFrame(render);
    };

    render();
  }, []);

  const addControls = () => {
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
      if (key == 32) {
        event.preventDefault();
        shooting = true;
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
      if (key == 32) {
        shooting = false;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  };

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
