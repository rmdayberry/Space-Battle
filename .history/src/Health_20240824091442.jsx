import React from "react";
import "./Health.css";

function Health({ playerHealth, enemyHealth }) {
  return (
    <div>
      <p>Player Health: {playerHealth}</p>
      <p>Enemy Health: {enemyHealth}</p>
    </div>
  );
}

export default Health;
