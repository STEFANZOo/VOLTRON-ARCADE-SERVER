import React , {useEffect, useState , useRef} from "react";
import FillBoard from './utilities/fillBoard';
import revealCell from './utilities/revealCell';
import { FaFlag } from "react-icons/fa";
import GridCell from './gridCell';
import RevealCell from "./utilities/revealCell";
import Timer  from "./utilities/timer";
import Modal from "./utilities/loseModal";
//import { trusted } from "mongoose";
import WinModal from "./utilities/winModal";
import { checkForBestTime } from "./utilities/checkForBestTime";
import axios from "axios";
//import Wallet from "../../../Server/mongoModels/wallet";

function MineSweeperGameBoard({minesweeper , player , setLeaderBoards , setTime}) {
    const [rows, setRows] = useState(9);
    const [cols, setCols] = useState(9);
    const [mines, setMines] = useState(10);
    const [flags, setFlags] = useState(0);
    const [grid, setGrid] = useState([]);
    const [seconds , setSeconds] = useState(0);
    const [isActive , setIsActive] = useState(false);
    const [isShowing , setIsShowing] = useState(false);
    const [showWin , setShowWin] = useState(false);
    const [losing , setLosing] = useState(false);
    const [action , setAction] = useState();
    

    const bestTimes = minesweeper;

    useEffect(() => {
        function freshBoard(){
            const newBoard = FillBoard(rows, cols, mines);
            setGrid(newBoard);
        };
        freshBoard();
    } , [rows, cols, mines]);

    function toggle(){
        setIsActive(!isActive)
    };
    
    const clearTimer = () => {
        setSeconds(0);
    };

    useEffect(() => {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
                setSeconds(seconds + 1)
            }, 1000);
        }else if(!isActive && seconds !== 0) {
            clearInterval(interval);
            interval = null;
        }
        return() => clearInterval(interval)
    }, [isActive, seconds]);

    
      

    const setFlag = (e, x, y) => {
        e.preventDefault();
        let newGrid = JSON.parse(JSON.stringify(grid));
        if(newGrid[y][x].isFlagged){
            newGrid[y][x].isFlagged = false;
            setFlags(flags -1);        
        } 
        
        else if(flags < mines && isActive && !newGrid[y][x].isRevealed){
            newGrid[y][x].isFlagged = true;
            setFlags(flags + 1);
        }
        setGrid(newGrid);
        checkWin();
    };

    const touchSetFlag = (e, x, y) => {
        //e.preventDefault();
        let newGrid = JSON.parse(JSON.stringify(grid));
        if(newGrid[y][x].isFlagged){
            newGrid[y][x].isFlagged = false;
            setFlags(flags -1);        
        } 
        
        else if(flags < mines && isActive && !newGrid[y][x].isRevealed){
            newGrid[y][x].isFlagged = true;
            setFlags(flags + 1);
        }
        setGrid(newGrid);
        checkWin();
    };

    const reveal = (x,y) => {
        let newGrid = JSON.parse(JSON.stringify(grid));
        if(!newGrid[y][x].isRevealed && !newGrid[y][x].isFlagged && isActive){
            if(newGrid[y][x].value === -1){
                setLosing(true);
                newGrid[y][x].isRevealed = true;
                setGrid(newGrid);
                
                for(let y = 0; y < cols; y++){
                    for(let x = 0; x < rows; x++){
                        newGrid[y][x].isRevealed = true;                      
                    }                                   
                }
                
                setGrid(newGrid);
                toggle();
                
                setIsShowing(true)
                
            }
            else{
                let revealed = RevealCell(newGrid, x, y);
                setGrid(revealed);
            }
        }
                         
    };

    const newGame = () => {
        const newBoard = FillBoard(rows, cols, mines);
        setGrid(newBoard);
        setIsActive(true);
        clearTimer();
        setFlags(0);
        setIsShowing(false);
        setShowWin(false);
        setLosing(false)
    };

    function beginnerLevel(){
        setRows(9);
        setCols(9);
        setMines(10);
        setFlags(0);
        const beg = FillBoard(rows, cols, mines);
        setGrid(beg);
        clearTimer();
        
    }

    function noviceLevel(){
        setRows(12);
        setCols(12);
        setMines(20);
        setFlags(0);
        const novice = FillBoard(rows, cols, mines);
        setGrid(novice);
        clearTimer();
    }

    function intermediateLevel(){
        setRows(16);
        setCols(16);
        setMines(40);
        setFlags(0);
        const inter = FillBoard(rows, cols, mines)
        setGrid(inter);
        clearTimer();
    }

    function expertBoard(){
        setRows(30);
        setCols(16);
        setMines(99);
        setFlags(0);
        const exp = FillBoard(rows, cols, mines)
        setGrid(exp);
        clearTimer();
    }

    function masterLevel(){
        setRows(24);
        setCols(30);
        setMines(150);
        setFlags(0);
        const master = FillBoard(rows, cols, mines);
        setGrid(master);
        clearTimer();
    }

    const expertLevel = () => {
            expertBoard();
    }


    function checkWin(){
        let Iwin = 0;
        grid.forEach((row)=>{row.forEach((cell)=>{
            if(!cell.isRevealed ){
                Iwin++;
            }
            if(cell.isFlagged){
                Iwin--;
            }
            
        })})

       return Iwin
    };

    async function postBesttime(record , player , seconds)  {
        let answer = await axios.post('/bestTime' , {record: record, player: player ,seconds: seconds});

        return answer
    }

    useEffect(()=> {
        let Iwin = checkWin();
        if(Iwin === 0 && grid.length && !losing && flags === mines){
            toggle();
            setShowWin(true)
            let record = checkForBestTime(rows, cols, seconds , minesweeper);

            if(record > 0){
               let response =  postBesttime(record , player , seconds);
               
               if(response){
                switch(record){
                    case 1:
                        minesweeper.beginnerBestTime = seconds;
                        break;
                    case 2:
                        minesweeper.noviceBestTime = seconds;
                        break;

                    case 3:
                        minesweeper.intermediateBestTime = seconds;
                        break;
                    case 4:
                        minesweeper.expertBestTime = seconds;
                        break;
                    case 5:
                        minesweeper.masterBesttime = seconds;
                        break;
                    default:
                        break;
                }
                setTime(seconds);
            }
            
            }       
            
        }
    }, [grid])

    const level = () => {
        if(rows + cols === 18){
            return minesweeper.beginnerBestTime;
        }
        else if(rows + cols === 24){
            return minesweeper.noviceBestTime;
        }
        else if(rows + cols === 32){
            return minesweeper.intermediateBestTime;
        }
        else if(rows + cols === 46){
            return minesweeper.expertBestTime;
        }
        else if(rows + cols === 54){
            return minesweeper.masterBestTime;
        }
    }


    return(
        <div style={{ border: "10px solid grey", padding: "20px", backgroundColor: "rgb(200,192,192)" , display: 'block',   marginLeft: '1px auto', justifyContent: 'center', textAlign: 'center', marginTop: '20px', margin: '1px', oveflowX: 'scroll' } }>
            <button onClick={newGame}style={{backgroundColor: 'chartreuse', fontWeight: 'bold'}}>Start New Game</button><br></br><br></br>
            <button onClick={beginnerLevel}style={{backgroundColor: "gray", fontWeight: 'bold', color: 'white'}}>Beginner</button>
            <button onClick={noviceLevel}style={{backgroundColor: '#a97142', fontWeight: 'bold', color: 'white'}}>Novice</button>
            <button onClick={intermediateLevel}style={{backgroundColor: 'lightblue', fontWeight: 'bold'}}>Intermediate</button>
            <button onClick={expertLevel}style={{backgroundColor: 'yellow', fontWeight: 'bold'}}>Expert</button>
            <button onClick={masterLevel}style={{backgroundColor: 'black', fontWeight: 'bold', color: 'chartreuse'}}>Master</button>
            
            
            <br></br><br></br>
            <div style={{height: "40px" , width: "80px", backgroundColor: "black", color: "white" , border: "4px solid white",  display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center",fontSize: "28px", float: "left"}}>
            {seconds}
            </div>
            
            
            
            
            <h3 style={{color: "black"}}>Flags Planted: {flags} Mines: {mines} </h3>
            <div style={{border: "10px solid" , borderColor: "dimgrey white white dimgrey" , justifyContent: "center" }}>
            <Modal isShowing={isShowing} newGame={newGame} />
            <WinModal showWin={showWin} seconds={seconds} level={level} />
            {grid.map((row)=> {
                return(
                    
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                        {row.map((item) => {
                        return(
                            <div>
                                <GridCell data={item} setFlag={setFlag} reveal={reveal} touchSetFlag={touchSetFlag} />
                                
                            </div>                         
                        )
                        
                    })}
                        </div>                   
                )
            })}
            </div>
        </div>
    )

   
}

export default MineSweeperGameBoard;
