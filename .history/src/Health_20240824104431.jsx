import React from "react";
import "./Health.css";

function Health({ playerHealth, enemyHealth }) {
  return (
    <div className="health-display">
      <p>Player Health: {playerHealth}</p>
      <p>Enemy Health: {enemyHealth}</p>
    </div>
  );
}

export default Health;
