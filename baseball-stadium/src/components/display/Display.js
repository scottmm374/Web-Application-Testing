import React from 'react'
import { Jumbotron } from 'reactstrap'
import styled from 'styled-components'

const NewPColor = styled.p`
    color: tomato;
`;



function Display(props) {
    return (
        <div>
            <Jumbotron className='jumbotron'>
            <NewPColor>Balls: {props.balls}</NewPColor>
            <NewPColor>Strikes: {props.strikes}</NewPColor>
            <NewPColor>Fouls: {props.fouls}</NewPColor>
            <NewPColor>Hit: {props.hit}</NewPColor>
            </Jumbotron>
           
            
        </div>
    )
}

export default Display
