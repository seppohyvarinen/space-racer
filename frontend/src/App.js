import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(0);

  return (
    <div className="App">
      {mode === 0 ? <Menu setMode={setMode} /> : <Game setMode={setMode} />}
    </div>
  );
}

export default App;
