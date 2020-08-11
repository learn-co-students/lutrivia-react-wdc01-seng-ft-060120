import React from 'react'

const Header = (props) => {

    return (
        <div>
            <h1>Lutrivia</h1>
            <button onClick={props.resetGame}>New Game</button>
            <p>Score: {props.score}</p>
        </div>
    )
}

export default Header