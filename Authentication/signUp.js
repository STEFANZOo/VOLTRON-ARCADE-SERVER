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
                message: 'Wallet created!',
                wallet: wallet._id,
            });
        }).catch((error) => {
            res.status(401).json({
                message: 'Wallet not created.',
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
