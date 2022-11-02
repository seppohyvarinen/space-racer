import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { useState } from "react";
import GameOver from "./components/GameOver";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Store from "./redux/Store";
import HiScores from "./components/HiScores";

function App() {
  const { appState } = useSelector((state) => state.mainState);
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#4CEE3A",
      },
    },
    typography: {
      fontFamily: ["Press Start 2P", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {Store.getState().mainState.appState === 0 && <Menu />}
        {Store.getState().mainState.appState === 1 && <Game />}
        {Store.getState().mainState.appState === 2 && <GameOver />}
        {Store.getState().mainState.appState === 3 && <HiScores />}
      </div>
    </ThemeProvider>
  );
}

export default App;
