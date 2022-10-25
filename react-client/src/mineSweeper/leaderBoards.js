import React from "react"

export default function Leaderboards(props){
    let easy = JSON.parse(JSON.stringify(props.leaderBoards));
    easy = easy.sort((a,b) => {return a.games.minesweeper.beginnerBestTime - b.games.minesweeper.beginnerBestTime})

    let novice = JSON.parse(JSON.stringify(props.leaderBoards));
    novice = novice.sort((a,b)=> {return a.games.minesweeper.noviceBestTime - b.games.minesweeper.noviceBestTime})
    
    let intermediate = JSON.parse(JSON.stringify(props.leaderBoards));
    intermediate = intermediate.sort((a,b) => {return a.games.minesweeper.intermediateBestTime - b.games.minesweeper.intermediateBestTime})
    
    let expert = JSON.parse(JSON.stringify(props.leaderBoards))
    expert = expert.sort((a,b)=> {return a.games.minesweeper.expertBestTime - b.games.minesweeper.expertBestTime});

    let master = JSON.parse(JSON.stringify(props.leaderBoards));
    master = master.sort((a,b)=> {return a.games.minesweeper.masterBestTime - b.games.minesweeper.masterBestTime});
    
    return(
        <div style={{ backgroundColor: 'grey' , display: 'flex', flexDirection: 'right' ,  fontWeight: 'bold' , flexWrap: 'wrap', overflowX: 'scroll', overflowY: 'hidden', marginLeft: '0 auto', width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'right', margin: 'auto'}}>
                <table style={{border: "4px solid black" , backgroundColor: 'lightgrey' , margin: '10px'}}>
                <caption style={{border: "4px solid black" , backgroundColor: 'black', color: 'lightgrey' }}>Beginner Best Times</caption>
                    <thead>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Seconds</th>
                    </thead>
                    <tbody>
                        
                        {easy.map((item , index) => {
                            return(
                                <tr style={{justifyConent: 'center'}}>
                                    <td>{index + 1}</td>
                                    <td><b>{item.username}</b></td>
                                    <td><b>{item.games.minesweeper.beginnerBestTime}</b></td>
                                </tr>

                            )
                            
                        })}
                        
                    </tbody>
                    
                    
                </table>

                <table style={{border: "4px solid black" , backgroundColor: '#a97142', margin: '10px', color: "white" }}>
                    <caption style={{border: "4px solid black" , backgroundColor: 'black', color: '#a97142' }}>Novice Best Times</caption>
                    <thead>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Seconds</th>
                    </thead>
                    <tbody>
                        {novice.map((item , index) => {
                                return(
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.games.minesweeper.noviceBestTime}</td>
                                    </tr>

                                )
                                
                            })}
                    </tbody>

                </table>
                
                
                    <table style={{border: "4px solid black" , backgroundColor: 'lightblue', margin: '10px'}}>
                    <caption style={{border: "4px solid black" , backgroundColor: 'black', color: 'lightblue' }}>Intermediate Best Times</caption>
                        <thead>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Seconds</th>
                        </thead>
                        <tbody>
                            {intermediate.map((item , index) => {
                                    return(
                                        <tr style={{justifyConent: 'center'}}>
                                            <td>{index + 1}</td>
                                            <td>{item.username}</td>
                                            <td>{item.games.minesweeper.intermediateBestTime}</td>
                                        </tr>

                                    )
                                    
                                })}
                        </tbody>

                    </table>
                
                
                <table style={{border: "4px solid black" , backgroundColor: 'yellow', margin: '10px' }}>
                    <caption style={{border: "4px solid black" , backgroundColor: 'black', color: 'yellow' }}>Expert Best Times</caption>
                    <thead>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Seconds</th>
                    </thead>
                    <tbody>
                        {expert.map((item , index) => {
                                return(
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.games.minesweeper.expertBestTime}</td>
                                    </tr>

                                )
                                
                            })}
                    </tbody>

                </table>

                <table style={{border: "4px solid black" , backgroundColor: 'black', margin: '10px', color: "chartreuse" }}>
                    <caption style={{border: "4px solid black" , backgroundColor: 'chartreuse', color: 'black' }}>Master Best Times</caption>
                    <thead>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Seconds</th>
                    </thead>
                    <tbody>
                        {master.map((item , index) => {
                                return(
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.games.minesweeper.masterBestTime}</td>
                                    </tr>

                                )
                                
                            })}
                    </tbody>

                </table>

            </div>
        </div>
    )
}