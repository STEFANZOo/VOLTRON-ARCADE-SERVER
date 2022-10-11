import React from "react";

function WinModal({showWin, seconds , level}){
    const style = {width: 250, height: 250, backgroundColor: "blue",  border: "10px solid black", position: 'absolute', top: '65%', left: "10%", visibility: 'block', color: "white"}
    const bestTime = seconds <= level() ? "New Best Time!" + seconds : ''
    if(!showWin){
        return null;
    }
    
        return(
            <div style={style}>
                <h1>You Win!</h1><br></br>
                <h3>Your time was {seconds} seconds</h3>
                <h3>{seconds <= level() ? bestTime : "" }</h3>
            </div>
        )
    
}

export default WinModal