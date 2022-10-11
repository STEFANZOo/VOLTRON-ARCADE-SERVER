import React from "react";

function Modal ({isShowing , newGame}) {
    const style = {width: 250, height: 250, backgroundColor: "red",  border: "10px solid black", position: 'absolute', top: '65%', right: "10%", visibility: 'block'}
    if(!isShowing){
        return null;
    }
  return (
    <div style={style}>
        <h1>BOOM!</h1>
        <button onClick={newGame}>New Game</button>
    </div>
  )
}

export default Modal