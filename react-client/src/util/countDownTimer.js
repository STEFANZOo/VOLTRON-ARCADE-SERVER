import React from "react";
//import axios from "axios";
import { useCountdown } from "../hooks/useCountdown";

const ShowCounter = ({days , hours , minutes , seconds}) => {
    return (
        <h2>
            {('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)}
        </h2>
    )
};

const CountDownTimer = ({targetDate}) => {
    const [days , hours , minutes ,seconds , countdown] = useCountdown(targetDate);

    if(countdown <= 0){
        return <button>Mine</button>
    }else {
        return (
            <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
        )
    }
};


export default CountDownTimer;