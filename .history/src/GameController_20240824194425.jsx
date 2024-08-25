import React from "react";
import "./GameController.css";

function GameController({ gameStatus, onFire, onRestart }) {
  const handleFireClick = () => {
    const playerDamage = Math.floor(Math.random() * 10) + 1;
    const enemyDamage = Math.floor(Math.random() * 10) + 1;

    onFire(playerDamage, enemyDamage);
  };
  return (
    <div>
      {gameStatus === "playing" && (
        <button onClick={handleFireClick}>Fire</button>
      )}
      {gameStatus !== "playing" && <button onClick={onRestart}>Restart</button>}
      {gameStatus !== "playing" && (
        <p className="outcomeMesage">{gameStatus.toUpperCase()}!</p>
      )}
    </div>
  );
}

export default GameController;
