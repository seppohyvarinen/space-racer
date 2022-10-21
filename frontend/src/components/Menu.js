import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { mainMenu, gameScreen, hiScores } from "../redux/MainState";
import Store from "../redux/Store";

const Menu = ({ setMode }) => {
  const dispatch = useDispatch();
  const { appState } = useSelector((state) => state.mainState);

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
