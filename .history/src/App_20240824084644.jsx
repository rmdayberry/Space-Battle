import { useState } from "react";
import "./App.css";
import PlayerHealth from "./PlayerHealth";
import GameController from "./GameController";

function App() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [gameStatus, setGameStatus] = useState("playing");

  const handleFire = (playerDamage, enemyDamage) => {
    const newPlayerHealth = Math.max(playerHealth - playerDamage, 0);
    const newEnemyHealth = Math.max(enemyHealth - enemyDamage, 0);

    setPlayerHealth(newPlayerHealth);
    setEnemyHealth(newEnemyHealth);

    if(newPlayerHealth)

  }
  return <></>;
}

export default App;
