import { useState } from "react";
import "./App.css";
import "./index.css";
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
    }
  };

  const handleRestart = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setGameStatus("playing");
  };
  return (
    <div>
      <h1>Space Battle Simulator</h1>
      <Health playerHealth={playerHealth} enemyHealth={enemyHealth} />
      <GameController
        gameStatus={gameStatus}
        onFire={handleFire}
        onRestart={handleRestart}
      />
    </div>
  );
}

export default App;
