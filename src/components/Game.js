//we have a hook called useState
import React, { useState, Fragment } from 'react';
import Board from './Board';
import {calculateWinner} from '../helpers';

const styles = {
    width:'200px',
    margin: '20px auto',
};

const Game = () => {

    // we first use hook 'useState' to provide an empty array of size 9 to the Game, with values coming 
    // in 'board' and 'setBoard'
    // const [board, setBoard] = useState(Array(9).fill(null));

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);

    const [xIsNext, setXisNext] =  useState(true);

    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {

        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];

        // we should always keep a copy of the state if we are mutating it; instead of mutating it directly 
        //[... ] is the spread operator to create a shallow copy; 
        // const boardCopy = [...board];

        // if the game is won or user clicks on an occupied sqare, we return nothing
        // for this handle click event;
        if (winner || boardCopy[i]) return;

        //to put an X or O on the selected square
        // boardCopy[i] = xIsNext ? 'X' : 'O';

        //to set the state of the board
        // setBoard(boardCopy);

        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);

    }

    const jumpTo = () => {

    }

    const renderMoves = () => (
        <button onClick = {()=> setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )
   
    return (

        // we can wrap one Element inside a Fragment which is: <>.... </>
        <>
            <Board squares={board} onClick={handleClick} />

            <div style={styles}>
                <p> {winner ? 'Winner: ' + winner: 'Next Player: '+ (xIsNext ? 'X' : 'O')} </p>

                {renderMoves()}
            </div>
        </>
        
    )
}

export default Game;