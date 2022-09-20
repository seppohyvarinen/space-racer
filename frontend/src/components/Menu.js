import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { mainMenu, gameScreen } from "../redux/MainState";
import Store from "../redux/Store";

const Menu = ({ setMode }) => {
  const dispatch = useDispatch();
  const { appState } = useSelector((state) => state.mainState);

  const handleClick = () => {
    dispatch(gameScreen());
    console.log(Store.getState().mainState);
  };
  return (
    <div className="Menupage">
      <Button
        variant="outlined"
        fullWidth={true}
        color="secondary"
        size="large"
        onClick={() => handleClick()}
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
