const Wallet = require('../mongoModels/wallet');

const login = async (req, res, next) => {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).json({message: 'username or password not present'})
    }

    try{
        const wallet = await Wallet.findOne({username});
        if(password !== wallet.password){
            res.status(400).json({message: 'Incorrect password'})
        } else {
            //res.redirect( './profile');
            console.log(wallet.username +' Logged in!');
            //res.send(wallet)
            res.status(200).json(wallet)
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            error: error.message,})
    }
};

module.exports = login;