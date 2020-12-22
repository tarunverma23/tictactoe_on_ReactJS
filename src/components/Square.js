import React from 'react';

const props = {
    onClick: () => "function",
    value: "X",
};

const {value} = props;

// Style is a default prop used in React. 
// We Use camelcase CSS code inside default Style as they are JS objects and not pure CSS.
const style = {
    background: 'lightgreen',
    border: '2px solid darkgreen',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none', 
};


const Square = (props) => (

    <button style={style} onClick={props.onClick}>
        {props.value}
    </button>

);

// const Square = ({value, onClick}) => (

//     <button onClick={onClick}>
//         {value}
//     </button>
// );









export default Square;

