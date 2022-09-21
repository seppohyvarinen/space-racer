import { useDispatch, useSelector } from "react-redux";
import { mainMenu, gameScreen, gameOver } from "../redux/MainState";

const GameOver = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(mainMenu());
  };
  return (
    <div className="GameoverScreen" onClick={() => handleClick()}>
      Game Over
    </div>
  );
};

export default GameOver;
