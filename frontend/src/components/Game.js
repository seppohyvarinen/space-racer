import { useEffect, useRef } from "react";

let x = 0;
const Game = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "green";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillRect(x, 0, 30, 30);
      x++;
      ctx.stroke();
      requestAnimationFrame(render);
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
