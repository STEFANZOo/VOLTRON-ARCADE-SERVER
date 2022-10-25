import React from "react";
import {  FaBomb } from "react-icons/fa";

function Modal ({isShowing , newGame}) {
    const style = {width: 250, height: 250, backgroundColor: "red",  border: "10px solid black", position: 'absolute'  , visibility: 'block'}
    if(!isShowing){
        return null;
    }
  return (
    <div style={style}>
        <h1>BOOM!</h1>
        <FaBomb size={100}/><br></br><br></br>
        <button onClick={newGame}>New Game</button>
    </div>
  )
}

export default Modal