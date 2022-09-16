import { Button } from "@material-ui/core";

const Menu = ({ setMode }) => {
  return (
    <div className="Menupage">
      <Button
        variant="outlined"
        fullWidth={true}
        color="secondary"
        size="large"
        style={{
          background: "linear-gradient(to right bottom, #FFB5FF, #82ffa1)",
        }}
        onClick={() => setMode(1)}
      >
        Start Game
      </Button>

      <Button
        variant="outlined"
        fullWidth={true}
        color="secondary"
        size="large"
      >
        View Highscores
      </Button>

      <Button
        variant="outlined"
        fullWidth={true}
        color="secondary"
        size="large"
      >
        Options
      </Button>
    </div>
  );
};

export default Menu;
