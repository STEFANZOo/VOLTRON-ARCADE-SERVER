const res = require("express/lib/response");
const { json } = require("express/lib/response");

const Wallet = require('../mongoModels/wallet');

const signUp = async (req, res, next) => {
    const {username, password} = req.body;

    try {
        await Wallet.create({
            username,
            password
        }).then(wallet => {
            console.log('Wallet created!');
            console.log(wallet);
            res.status(201).json({
                message: 'Account created. Welcome to Eternal Universe! Please close the window and use the login to enter the Electron Arcade.',
                username: wallet.username,
            });
        }).catch((error) => {
            res.status(401).json({
                message: 'Account not created.',
                error: error.message,
            })
        })
    }
    catch (error) {
        res.status(400).json({
            message: 'An error occured',
            error: error.message,
        })
    }; 
}


module.exports = signUp
