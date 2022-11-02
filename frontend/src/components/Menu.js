import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { mainMenu, gameScreen, hiScores } from "../redux/MainState";
import Store from "../redux/Store";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

const font = '"Press Start 2P", cursive';

const useStyles = makeStyles({
  root: {
    fontFamily: font,
  },
});

const Menu = ({ setMode }) => {
  const dispatch = useDispatch();
  const { appState } = useSelector((state) => state.mainState);
  const classes = useStyles();

  const startGame = () => {
    dispatch(gameScreen());
    console.log(Store.getState().mainState);
  };

  const openHiScores = () => {
    dispatch(hiScores());
  };

  return (
    <div className="Menupage">
      <Button
        className={classes.root}
        variant="outlined"
        fullWidth={true}
        color="secondary"
        size="large"
        onClick={() => startGame()}
      >
        Start Game
      </Button>
      <Button
        variant="outlined"
        fullWidth={true}
        color="secondary"
        size="large"
        onClick={() => openHiScores()}
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
