const Wallet = require('../mongoModels/wallet');

const minesweeperBestTimes = async () => {
    const minesweeperTimes = await Wallet.find({},{username: 1, _id: 0, "games.minesweeper": 1}).sort({"games.minesweeper.beginnerBestTime": 1});
    //console.log(begTimes[0].games.minesweeper.intermediateBestTime);
    
    return minesweeperTimes;
}

module.exports = {minesweeperBestTimes}

//