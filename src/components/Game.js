//we have a hook called useState
import React, { useState } from 'react';
import Board from './Board';
import {calculateWinner} from '../helpers';

const Game = () => {

    // we first use hook 'useState' to provide an empty array of size 9 to the Game, with values coming 
    // in 'board' and 'setBoard'
    const [board, setBoard] = useState(Array(9).fill(null));

    const [xIsNext, setXisNext] =  useState(true);

    const winner = calculateWinner(board);

    const handleClick = () => {

    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <Board squares={board} onClick={handleClick}></Board>
        
    )
};

export default Game;