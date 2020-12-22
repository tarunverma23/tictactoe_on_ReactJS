import React from 'react';
import Square from './Square';



const Board = ({squares, onClick}) => (

    <div>
        <Square value = "1" onClick={()=> onClick("dummy value")}></Square>
        <Square value = "2" onClick={()=> onClick("dummy value")}></Square>
        <Square value = "3" onClick={()=> onClick("dummy value")}></Square>
        <Square value = "4" onClick={()=> onClick("dummy value")}></Square>
        <Square value = "5" onClick={()=> onClick("dummy value")}></Square>
        <Square value = "6" onClick={()=> onClick("dummy value")}></Square>
        <Square value = "7" onClick={()=> onClick("dummy value")}></Square>
        <Square value = "8" onClick={()=> onClick("dummy value")}></Square>
        <Square value = "9" onClick={()=> onClick("dummy value")}></Square>
    </div>

);

export default Board;