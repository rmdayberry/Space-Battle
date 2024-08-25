import React from "react";

function OutcomeMessage({ gameStatus }) {
if (newPlayerHealth === 0 && newEnemyHealth === 0) {
  setGameStatus("draw");
} else if (newPlayerHealth === 0) {
  setGameStatus("loss");
} else if (newEnemyHealth === 0) {
  setGameStatus("win");
}
return <p></p>