import { useState, useEffect, useRef } from "react";
import Laser from "./Laser";
import LaserWeapon from "./LaserWeapon";
import Player from "./Player";
import SpawnPortal from "./SpawnPortal";

let x = 230;
let leftPressed = false;
let rightPressed = false;
let shooting = false;
let wpn = new LaserWeapon();
let player = new Player(wpn, x);
let spawn = new SpawnPortal();
let points = 0;
let baseHealth = 5;

const Game = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [motherShip, setMotherShip] = useState(baseHealth);

  useEffect(() => {
    addKeyHandlers();
    const render = () => {
      const canvas = canvasRef.current;
      canvas.width = 600;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");

      const setStyle = () => {
        ctx.shadowColor = "d53";
        ctx.shadowBlur = 200;
        ctx.lineJoin = "bevel";
      };

      setStyle();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      collisionCheck(spawn, wpn);
      checkIfEnemyPassed(spawn);
      player.draw(ctx, x);
      player.controls(leftPressed, rightPressed, shooting);
      wpn.draw(ctx);
      spawn.newEnemy();
      spawn.moveAll(ctx);
      console.log(score);

      requestAnimationFrame(render);
    };

    render();
  }, []);

  useEffect(() => {}, [score]);

  const addKeyHandlers = () => {
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

  const collisionCheck = (spawn, wpn) => {
    if (spawn.enemies.length != 0 && wpn.lasers.length != 0) {
      spawn.enemies.forEach((enemy) => {
        wpn.lasers.forEach((laser) => {
          if (
            enemy.y >= laser.y &&
            laser.x >= enemy.x &&
            laser.x <= enemy.x + 50
          ) {
            enemy.destroy();
            laser.destroy();
            updateScore();
          }
        });
      });
    }
  };

  const checkIfEnemyPassed = (spawn) => {
    if (spawn.enemies.length != 0) {
      spawn.enemies.forEach((enemy) => {
        if (enemy.y >= 800) {
          enemy.destroy();
          updateMotherShip();
          console.log("Hit!");
        }
      });
    }
  };

  const updateScore = () => {
    points++;
    setScore(points);
  };

  const updateMotherShip = () => {
    baseHealth--;
    setMotherShip(baseHealth);
  };

  return (
    <div className="gameScreen">
      <div className="infoBoard">
        <p>Score: {score}</p>
        <p>Lives: {lives}</p>
        <p>Mothership: {motherShip}</p>
      </div>
      <div className="canvasCrate">
        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>

      <div className="gameControls">controls here</div>
    </div>
  );
};

export default Game;
