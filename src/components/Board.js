import React from 'react';
import Square from './Square';

const style ={
    border: '4px solid darkgreen',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '8% auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr)/ repeat(3, 1fr)',
};

const Board = ({squares, onClick}) => (

    <div style={style}>
        {squares.map((square, i) => (
             <Square key={i} value = {square} onClick={()=> onClick(i)}></Square>
        ))}

        {/* or we can use this syntax which has retun statement in it

        {squares.map((square, i) => {
            return <Square key={i} value = {square} onClick={()=> onClick("dummy value")}></Square>
        })} */}
    </div>
    
);

export default Board;