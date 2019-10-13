import React, { useState } from "react";
import Display from "../display/Display";
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid tomato;
  color: tomato;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  :hover {
    border: 2px solid RoyalBlue
    color: RoyalBlue;
  }

  // ${props => props.primary && css`
  //   background: palevioletred;
  //   color: white;
  // `}
`;


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
      <Display balls={balls} strikes={strikes} fouls={fouls} hit={hit} />
      <Button onClick={ballsCount}>Ball</Button>
      <Button onClick={strikeCount}>Strike</Button>
      <Button onClick={foulCount}>Foul</Button>
      <Button onClick={hitCount}>Hit</Button>
    </div>
  );
}

export default Scores;
