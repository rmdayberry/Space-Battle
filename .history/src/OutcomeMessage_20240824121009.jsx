import React from "react";

function OutcomeMessage({ gameStatus }) {
  if(gameStatus === 'playing') return null;

  let statusClass="";
  if (gameStatus=== 'win') {
    statusClass = 'Win';
  } else if{
  (gameStatus=== 'lose'){
    statusClass="Lose";
  } else if{
    (gameStatus==='draw'){
      statusClass= 'Draw';
    }
    return <p className=""
  }
  }


return <p></p>