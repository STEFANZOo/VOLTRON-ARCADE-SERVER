const Wallet = require('./mongoModels/wallet');

const runAction = async (req, res) => {
    const player = await Wallet.findOne({username: req.body.username});
    const now = new Date();
    const nextMine = new Date(player.nextMine);
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow = tomorrow.toISOString(); 

    if(nextMine.getTime() - now.getTime() <= 0){
        result = Math.floor(Math.random() * 3) + 1;
        player.inventory.Ore = player.inventory.Ore + result;
        player.nextMine = tomorrow;
        player.save();

        return {ore: result , nextMine: tomorrow}
    }
    
}

module.exports = {runAction}