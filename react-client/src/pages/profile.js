import React , {useState , useEffect} from "react";
import '../App.css';
import {useLocation} from 'react-router-dom';
import axios from "axios";
//import GameBoard from './gameComponenets/gameBoard';
//import GameCell from './gameComponenets/gameCell';
//import Board from "../tuts/tutComponents/board";
import {FaFlag , FaBomb} from 'react-icons/fa';
import MineSweeperGameBoard from '../mineSweeper/gameBoard';
import Leaderboards from "../mineSweeper/leaderBoards";

function Profile(props) {

    const location = useLocation();

    const [wallet , setWallet] = useState(location.state.wallet);
    const [joules, setJoules] = useState(wallet.inventory.Joules);
    const [leaderBoards, setLeaderBoards] = useState([]);
    const [time , setTime] = useState();
    
    //setWallet(location.state.wallet);
    //console.log(wallet);
    //const {joules, setJoules} = useState(wallet.inventory.Joules)

    const minesweeper = wallet.games.minesweeper
    const player = wallet.username
    //setTimes(minesweeper)

    const handleClick= async () => {
        const response = await axios.get('/gameEngine')
        //location.state.wallet.inventory.Joules = response.data + 2;
        //wallet.inventory.Joules = response.data + 2;
        setJoules(joules + response.data);
        //console.log(location.state.wallet.inventory.Joules);
        //console.log(leaderBoards)
        console.log('onclick')
        
        //console.log(wallet.inventory.Joules)
        
    };

    const getTimes = async () => {
        const response = await axios.get('/minesweeper/bestTimes')
        const data = await response;
        setLeaderBoards(response.data);
        //console.log(response.data)
        //console.log(leaderBoards) 
        return data.data;
        
        
    };

    useEffect(()=> { 
        getTimes();
        //setLeaderBoards(times);
        //console.log('hello' + leaderBoards[0].username)
        //console.log(leaderBoards)
        
    } ,[joules , minesweeper, time])

    return(
        <div style={{ display: 'block'}}>
            <div style={{   margin: '0 auto', justifyContent: 'safe center',  display: 'block' }}>
                <div className="Profile-header">

                    <div >
                        <h1>Eternal Universe</h1>
                    </div>
                    
                </div>
                
                <div className="App">
                    <h1 style={{backgroundColor: 'chartreuse'}}>Electron Arcade</h1>
                    <h1>player: {location.state.wallet.username}</h1>
                    <h2>Joules: {joules}</h2>
                    
                </div>
                <button onClick={handleClick} onMouseDown={()=> {console.log('mouse down')}} onMouseUp={()=> {console.log('mouse up')}} onTouchStart={()=> {console.log('touch start')}} onTouchEnd={()=> {console.log('touch end')}} >Mine</button>
                
                
                {leaderBoards.length > 0 ? <Leaderboards leaderBoards={leaderBoards} /> : 'Loading'}
                <div style={{justifyContent: 'center', display: 'inline-block',  oveflowX: 'scroll'}}>
                    <MineSweeperGameBoard minesweeper={minesweeper} player={player} setLeaderBoards={setLeaderBoards} setTime={setTime} style={{display: 'flex'}} />
                </div>
                
                
                
                            
            </div>
        </div>
    )
}

export default Profile

/*

<div style={{justifyContent: "center",  display: "flex", border: "5px solid black"}}>
                <MineSweeperGameBoard minesweeper={minesweeper} player={player} />
            </div>

*/