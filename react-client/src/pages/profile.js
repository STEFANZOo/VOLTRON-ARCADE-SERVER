import React , {useState} from "react";
import '../App.css';
import {useLocation} from 'react-router-dom';
import axios from "axios";
//import GameBoard from './gameComponenets/gameBoard';
//import GameCell from './gameComponenets/gameCell';
//import Board from "../tuts/tutComponents/board";
import {FaFlag , FaBomb} from 'react-icons/fa';
import MineSweeperGameBoard from '../mineSweeper/gameBoard';

function Profile(props) {

    const location = useLocation();

    const [wallet , setWallet] = useState(location.state.wallet);
    const [joules, setJoules] = useState(wallet.inventory.Joules);
    //setWallet(location.state.wallet);
    //console.log(wallet);
    //const {joules, setJoules} = useState(wallet.inventory.Joules)

    const minesweeper = wallet.games.minesweeper
    const player = wallet.username

    const handleClick= async () => {
        const response = await axios.get('/gameEngine')
        //location.state.wallet.inventory.Joules = response.data + 2;
        //wallet.inventory.Joules = response.data + 2;
        setJoules(joules + response.data);
        console.log(location.state.wallet.inventory.Joules);
        
        console.log(wallet.inventory.Joules)
        
    }

    return(
        <>
            <div className="Profile-header">
                <div style={{textAlign:"center"}}>
                    <h1>Eternal Universe</h1>

                </div>
                
                
                
                
                
            </div>
            <div className="App">
                <h1 style={{textAlign: "left"}} >Profile Page</h1>
                <h1>Username: {location.state.wallet.username}</h1>
                <h1>Inventory</h1>
                <h2>Joules:</h2>
                <p>{location.state.wallet.inventory.Joules} </p>
                <p>{wallet.inventory.Joules}</p>
                <p>{joules}</p>
                <h2>Ore:</h2>
                <p>{location.state.wallet.inventory.Ore} </p>
                
            </div>
            <button onClick={handleClick}>Mine</button>

            <div style={{justifyContent: "center",  display: "flex", border: "5px solid black"}}>
                <MineSweeperGameBoard minesweeper={minesweeper} player={player}/>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        </>
        
    )
}

export default Profile