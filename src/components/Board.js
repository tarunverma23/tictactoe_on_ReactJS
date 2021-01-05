import React from 'react';
import Square from './Square';

const style ={
    border: '4px solid darkgreen',
    borderRadius: '10px',
    width: '350px',
    height: '350px',
    margin: '7% auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr)/ repeat(3, 1fr)',
};

const Board = ({squares, onClick}) => (

    <div style={style} className="">
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