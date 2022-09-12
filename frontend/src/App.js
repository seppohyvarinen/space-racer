import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { useState } from "react";
import GameOver from "./components/GameOver";

function App() {
  const [mode, setMode] = useState(0);

  return (
    <div className="App">
      {mode === 0 && <Menu setMode={setMode} />}
      {mode === 1 && <Game setMode={setMode} />}
      {mode === 2 && <GameOver setMode={setMode} />}
    </div>
  );
}

export default App;
