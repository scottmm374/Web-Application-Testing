import React from 'react'

function Display(props) {
    return (
        <div>
            <p>Balls: {props.balls}</p>
            <p>Strikes: {props.strikes}</p>
            <p>Fouls: {props.fouls}</p>
            <p>Hit: {props.hit}</p>
            
        </div>
    )
}

export default Display
