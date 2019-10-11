import React, { useState } from "react";
import Display from "../display/Display";

function Scores() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hit, setHit] = useState(0);

  const ballsCount = () => {
    if (balls < 4) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
    }
  };

  const strikeCount = () => {
    if (strikes < 3) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
    }
  };

  const foulCount = () => {
    if (fouls < 2) {
      setFouls(fouls + 1);
    }
  };

  const hitCount = () => {
    setHit(hit + 1);
    setBalls(0);
    setStrikes(0);
    setFouls(0);
  };

  console.log("Hit results", balls, fouls, strikes);
  console.log("balls", balls);
  console.log("Strikes", strikes);
  console.log("Fouls", fouls);
  console.log("Hit", hit);

  return (
    <div>
      <Display balls={balls} strikes={strikes} />
      <button onClick={ballsCount}>Ball</button>
      <button onClick={strikeCount}>Strike</button>
      <button onClick={foulCount}>Foul</button>
      <button onClick={hitCount}>Hit</button>
    </div>
  );
}

export default Scores;
