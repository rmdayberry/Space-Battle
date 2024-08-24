import { useState } from "react";
import "./App.css";
import Health from "./Health";
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

    if (newPlayerHealth === 0 && newEnemyHealth === 0) {
      setGameStatus("draw");
    } else if (newPlayerHealth === 0) {
      setGameStatus("loss");
    } else if (newEnemyHealth === 0) {
      setGameStatus("win");
    }
  };

  const handleRestart = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setGameStatus("playing");
  };
  return (
    <div>
      <Health playerHealth={playerHealth} enemyHealth={enemyHealth} />
    </div>
  );
}

export default App;
