import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "../redux/Score";

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

const Game = ({ setMode }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [motherShip, setMotherShip] = useState(baseHealth);
  const [health, setHealth] = useState(3);

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

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
      spawn.newAsteroid();
      spawn.moveAll(ctx);

      requestAnimationFrame(render);
    };

    render();
  }, []);

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
    if (spawn.asteroids.length != 0 && wpn.lasers.length != 0) {
      spawn.asteroids.forEach((enemy) => {
        wpn.lasers.forEach((laser) => {
          if (
            enemy.y >= laser.y &&
            laser.x >= enemy.x &&
            laser.x <= enemy.x + 50
          ) {
            enemy.takeHit();
            laser.destroy();
            if (!enemy.alive) {
              updateScore();
            }
          }
        });
      });
    }
  };

  const checkIfEnemyPassed = (spawn) => {
    if (spawn.asteroids.length != 0) {
      spawn.asteroids.forEach((enemy) => {
        if (enemy.y >= 800) {
          enemy.destroy();
          updateMotherShip();
          console.log("Hit!");
        }
      });
    }
  };

  const updateScore = () => {
    dispatch(increment());
  };

  const updateMotherShip = () => {
    baseHealth--;
    setMotherShip(baseHealth);
    if (baseHealth <= 0) {
      dispatch(reset());
      spawn.asteroids = [];
      setMode(2);
    }
  };

  return (
    <div className="gameScreen">
      <div className="infoBoard">
        <p>Score: {count}</p>
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
