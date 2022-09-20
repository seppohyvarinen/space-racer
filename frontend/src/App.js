import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { useState } from "react";
import GameOver from "./components/GameOver";
import { useDispatch, useSelector } from "react-redux";

import Store from "./redux/Store";

function App() {
  const [mode, setMode] = useState(0);
  const { appState } = useSelector((state) => state.mainState);

  return (
    <div className="App">
      {Store.getState().mainState.appState === 0 && <Menu setMode={setMode} />}
      {Store.getState().mainState.appState === 1 && <Game setMode={setMode} />}
      {Store.getState().mainState.appState === 2 && (
        <GameOver setMode={setMode} />
      )}
    </div>
  );
}

export default App;
