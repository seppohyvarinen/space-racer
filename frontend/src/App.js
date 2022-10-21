import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { useState } from "react";
import GameOver from "./components/GameOver";
import { useDispatch, useSelector } from "react-redux";

import Store from "./redux/Store";
import HiScores from "./components/HiScores";

function App() {
  const { appState } = useSelector((state) => state.mainState);

  return (
    <div className="App">
      {Store.getState().mainState.appState === 0 && <Menu />}
      {Store.getState().mainState.appState === 1 && <Game />}
      {Store.getState().mainState.appState === 2 && <GameOver />}
      {Store.getState().mainState.appState === 3 && <HiScores />}
    </div>
  );
}

export default App;
