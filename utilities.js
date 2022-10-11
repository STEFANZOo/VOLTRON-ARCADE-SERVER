const Wallet = require('./mongoModels/wallet');

const postBestTime = async (player , record , seconds) => {
    const user = await Wallet.findOne({username: player});
    console.log(user)
    console.log('git')
    switch(record){
        case 1:
            if(seconds < user.games.minesweeper.beginnerBestTime){
                user.games.minesweeper.beginnerBestTime = seconds;
                user.save()
                
            }
            break;
        case 2:
            if(seconds < user.games.minesweeper.intermediateBestTime){
                user.games.minesweeper.intermediateBestTime = seconds;
                user.save()
                
            }
            break;
        case 3:
            if(seconds < user.games.minesweeper.expertBestTime){
                user.games.minesweeper.expertBestTime = seconds;
                user.save()
                
            }
            break;
        }
    }

    module.exports = {postBestTime}