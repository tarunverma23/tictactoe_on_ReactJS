import React from 'react';

const props = {
    onClick: () => "function",
    value: "X",
};

const {value} = props; 


const Square = (props) => (

    <button onClick={props.onClick}>
        {props.value}
    </button>

);

// const Square = ({value, onClick}) => (

//     <button onClick={onClick}>
//         {value}
//     </button>
// );









export default Square;

