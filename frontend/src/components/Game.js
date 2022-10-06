import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentHealth, increment, reset, takeHit } from "../redux/Score";
import { mainMenu, gameScreen, gameOver } from "../redux/MainState";

import Store from "../redux/Store";

import Laser from "./Laser";
import LaserWeapon from "./LaserWeapon";
import Player from "./Player";
import SpawnPortal from "./SpawnPortal";

let x = 230;
let leftPressed = false;
let rightPressed = false;
let shooting = false;
let wpn = new LaserWeapon("pink", 70, "player");
let player = new Player(wpn, x);
let spawn = new SpawnPortal();

const Game = () => {
  const canvasRef = useRef(null);

  const { count, health } = useSelector((state) => state.counter);
  const { appState } = useSelector((state) => state.mainState);
  const dispatch = useDispatch();

  useEffect(() => {
    const render = () => {
      addKeyHandlers();
      const canvas = canvasRef.current;
      canvas.width = 600;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBgImg(ctx);
      collisionCheck(spawn, wpn);
      checkIfEnemyPassed(spawn);
      enemyAsteroidCollisionCheck();
      playerEnemyLaserHit();
      enemyCollisionCheck();
      enemiesShoot(spawn);
      enemyPlayerLaserHit(spawn, player);
      player.draw(ctx, x);
      player.controls(leftPressed, rightPressed, shooting);
      wpn.draw(ctx);
      spawn.spawning();
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

      if (key === 37) {
        event.preventDefault();
        leftPressed = true;
      }
      if (key === 39) {
        event.preventDefault();
        rightPressed = true;
      }
      if (key === 32) {
        event.preventDefault();
        shooting = true;
      }
    };

    const handleKeyUp = (event) => {
      let key;
      if (event !== undefined) {
        key = event.keyCode;
      }

      if (key === 37) {
        leftPressed = false;
      }
      if (key === 39) {
        rightPressed = false;
      }
      if (key === 32) {
        shooting = false;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  };

  const collisionCheck = (spawn, wpn) => {
    if (spawn.asteroids.length !== 0 && wpn.lasers.length !== 0) {
      spawn.asteroids.forEach((enemy) => {
        wpn.lasers.forEach((laser) => {
          if (
            enemy.y >= laser.y &&
            laser.x >= enemy.x &&
            laser.x <= enemy.x + 50
          ) {
            enemy.takeHit();
            laser.destroy();
            console.log("täällä");

            if (!enemy.alive) {
              updateScore();
            }
          }
        });
      });
    }
  };

  function drawBgImg(ctx) {
    let bgImg = new Image();
    bgImg.src = require("../assets/canvasBG.png");
    bgImg.onload = () => {
      ctx.drawImage(bgImg, 0, 0, 600, 800);
    };
  }

  // check if enemies collide with asteroids so enemies know to turn to other direction

  const enemyAsteroidCollisionCheck = () => {
    spawn.enemies.forEach((enemy) => {
      spawn.asteroids.forEach((asteroid) => {
        if (
          enemy.x <= asteroid.x + 100 &&
          enemy.x >= asteroid.x - 30 &&
          enemy.y >= asteroid.y - 30 &&
          enemy.y <= asteroid.y + 100
        ) {
          enemy.changeDirection();
        }
      });
    });
  };

  // check if enemies collide with each other so enemies know to turn to other direction

  const enemyCollisionCheck = () => {
    spawn.enemies.forEach((enemy1) => {
      spawn.enemies.forEach((enemy2) => {
        if (
          enemy1.id !== enemy2.id &&
          enemy1.x <= enemy2.x + 40 &&
          enemy1.x >= enemy2.x - 10
        ) {
          enemy1.changeDirection();
          enemy2.changeDirection();
        }
      });
    });
  };

  const playerEnemyLaserHit = () => {
    if (spawn.enemies.length !== 0 && wpn.lasers.length !== 0) {
      spawn.enemies.forEach((enemy) => {
        wpn.lasers.forEach((laser) => {
          if (
            enemy.y >= laser.y &&
            laser.x >= enemy.x &&
            laser.x <= enemy.x + 30
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

  // check if asteroid passed

  const checkIfEnemyPassed = (spawn) => {
    if (spawn.asteroids.length !== 0) {
      spawn.asteroids.forEach((enemy) => {
        if (
          enemy.y >= 630 &&
          enemy.y <= 700 &&
          enemy.x >= player.x - 20 &&
          enemy.x <= player.x + 120
        ) {
          enemy.destroy();
          updateShip();
          console.log("Hit!");
        }
      });
    }
  };

  const enemyPlayerLaserHit = (spawn, player) => {
    if (spawn.enemies.length !== 0) {
      spawn.enemies.forEach((enemy) => {
        if (enemy.weapon.lasers.length != 0) {
          enemy.weapon.lasers.forEach((laser) => {
            if (
              player.y <= laser.y &&
              laser.x >= player.x + 20 &&
              laser.x <= player.x + 100
            ) {
              laser.destroy();
              updateShip();
            }
          });
        }
      });
    }
  };

  const enemiesShoot = (spawn) => {
    if (spawn.enemies.length != 0) {
      spawn.enemies.forEach((enemy) => {
        enemy.shoot();
      });
    }
  };

  const updateScore = () => {
    dispatch(increment());
  };

  const updateShip = () => {
    dispatch(takeHit());

    console.log(Store.getState());
    if (Store.getState().counter.health <= 0) {
      dispatch(reset());
      spawn.asteroids = [];
      dispatch(gameOver());
    }
  };

  return (
    <div className="gameScreen">
      <div className="infoBoard">
        <p>Score: {count}</p>
        <p>Lives: {health}</p>
      </div>
      <div className="canvasCrate">
        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>

      <div className="gameControls">controls here</div>
    </div>
  );
};

export default Game;
