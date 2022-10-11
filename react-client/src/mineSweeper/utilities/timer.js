import React , {useState, useEffect} from 'react';

export default function Timer(){
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle(){
        setIsActive(!isActive)
    };
    function clearTimer(){
        setTimer(0);
        setIsActive(false)
    };
    
    useEffect(() => {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
                setTimer(timer => timer +1);
            } , 1000)
        } else if (!isActive && timer !== 0){
            clearInterval(interval);
        }
    }, [isActive, timer]);

    return(
        <div>
            {timer}
        </div>
    )
}