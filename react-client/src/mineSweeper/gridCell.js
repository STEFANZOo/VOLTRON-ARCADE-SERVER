import React, { useEffect, useState , useRef} from "react";
import { FaFlag , FaBomb } from "react-icons/fa";

export default function GridCell({data, setFlag, reveal , touchSetFlag }) {
    const [style , setStyle] = useState({})
    const [action , setAction] = useState();

    const timerRef = useRef();
    const isLongPress = useRef();
/*
    const hiddenStyle = {
        width: 30, height: 30, backgroundColor: "rgb(192,192,192)", border: "4px", color: "white",
        justifyContent: "center", alignItems: "center", display: "flex", borderStyle: "solid" , cursor: "pointer", borderRadius: "1px", borderColor: " white dimgrey dimgrey white"
    }
    const revealedStyle = {width: 34, height: 34, backgroundColor: "rgb(200,192,192)" , border: '1px solid black', padding: '1px',  display: 'flex' ,  alignItems: 'center', justifyContent: 'center',
    };
*/
    function getCellStyle(data){
        let cellStyle = {
            width: 30, height: 30, backgroundColor: "rgb(192,192,192)", border: "4px", color: "white",
            justifyContent: "center", alignItems: "center", display: "flex", borderStyle: "solid" , cursor: "pointer", borderRadius: "1px", borderColor: " white dimgrey dimgrey white" , WebkitTouchCallout: 'none', WebkitUserSelect: 'none', userSelect: 'none'
        }
        if(data.isRevealed){
            cellStyle = {width: 34, height: 34, backgroundColor: "rgb(200,192,192)" , border: '1px solid black', padding: '1px',  display: 'flex' ,  alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold'
        }
        }
        switch(data.value){
            case 0:
                data.color = 'hidden';
                break;
            case 1: 
                cellStyle.color = 'blue';
                break;
            case 2:
                cellStyle.color = "green";
                break;
            default:
                cellStyle.color = 'red'
        }
        return cellStyle
    }
    useEffect(()=> {
        const funcCellStyle = getCellStyle(data)
        setStyle(funcCellStyle)
    },[data]);

    function startPressTimer(){
        isLongPress.current = false;
        timerRef.current = setTimeout(()=> {
            isLongPress.current = true;
            setAction('longpress');
        } , 200);
    }

    
    

    const onClick = (e) => {
        if(isLongPress.current){
            console.log('yo')
            //touchSetFlag(e ,data.x , data.y)
        }else{
            reveal(data.x, data.y);
        }
        clearTimeout(timerRef.current);
        
    }
    function handleTouchstart(){
        console.log('touch start')
        startPressTimer();
    };
    function handleTouchEnd(e){
        console.log('touch end');
        if(isLongPress.current){
            console.log('yo')
            touchSetFlag(e ,data.x , data.y)
        }else{
            //reveal(data.x, data.y);
        }
        clearTimeout(timerRef.current);
    };
    function handleMouseDown(){
        startPressTimer();
    };
    function handleMouseUp(e){
        
        clearTimeout(timerRef.current)
    }
    return(
        <div style={style} onClick={onClick} onContextMenu={(e)=> setFlag(e, data.x, data.y)} onTouchStart={handleTouchstart} onTouchEnd={handleTouchEnd} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} >
            {data.isFlagged ? <FaFlag style={{color: "red"}} /> : data.isRevealed ? data.value === -1 ? <FaBomb style={{color: "black"}}/> : data.value === 0 ? '' : data.value : ''}
        </div>
    )
}
