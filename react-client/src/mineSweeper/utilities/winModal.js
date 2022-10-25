import React from "react";
import { FaFlag  } from "react-icons/fa";

function WinModal({showWin, seconds , level}){
    const style = {width: 250, height: 250, backgroundColor: "blue",  border: "10px solid black", position: 'absolute', visibility: 'block', color: "white"}
    const bestTime = seconds <= level() ? "New Best Time!!! " + seconds + 'seconds!': ''
    if(!showWin){
        return null;
    }
    
        return(
            <div style={style}>
                <h1>You Win!</h1><br></br>
                <FaFlag size={100}/><br></br><br></br>
                <h3>Your time was {seconds} seconds</h3>
                <h3>{seconds <= level() ? bestTime : "" }</h3>
            </div>
        )
    
}

export default WinModal