import React from "react";
import { FaFlag , FaTrophy } from "react-icons/fa";

function WinModal({showWin, seconds , level}){
    const style = {width: 250, height: 300, backgroundColor: "blue",  border: "10px solid black", position: 'absolute', visibility: 'block', color: "white"}
    const bestTime = seconds <= level() ? "New Best Time!!! " : ''
    if(!showWin){
        return null;
    }
    
        return(
            <div style={style}>
                <h1>You Win!</h1>
                <FaFlag size={30} style={{color: 'red'}} /><br></br>
                <h3>Your time was {seconds} seconds.</h3>
                {seconds <= level() ? <FaTrophy size={40} style={{color: 'yellow'}} /> : "" }
                <h3>{seconds <= level() ? bestTime : "" }</h3>
                
                
            </div>
        )
    
}

export default WinModal