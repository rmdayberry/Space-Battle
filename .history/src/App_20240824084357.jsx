import { useState } from "react";
import "./App.css";
import PlayerHealth from "./PlayerHealth";
import GameController from "./GameController";

function App() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [gameStatus, setGameStatus] = useState();
  return <></>;
}

export default App;
