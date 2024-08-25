import React from "react";
import "./Health.css";

function Health({ playerHealth, enemyHealth }) {
  return (
    <div className="health-display">
      <p className="player-health">Player Health: {playerHealth}</p>
      <p className="enemy-health">Enemy Health: {enemyHealth}</p>
    </div>
  );
}

export default Health;
