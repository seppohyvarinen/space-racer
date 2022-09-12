const GameOver = ({ setMode }) => {
  return (
    <div className="GameoverScreen" onClick={() => setMode(0)}>
      Game Over
    </div>
  );
};

export default GameOver;
