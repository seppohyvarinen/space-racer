const Menu = ({ setMode }) => {
  return (
    <div className="Menupage">
      <div className="Menubtn" onClick={() => setMode(1)}>
        Start Game
      </div>
      <div className="Menubtn">View Highscores</div>
      <div className="Menubtn">Options</div>
    </div>
  );
};

export default Menu;
