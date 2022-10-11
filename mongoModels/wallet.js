const mongoose = require('mongoose');

const walletSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    
    inventory: {
        Joules: {type: Number, default: 0},
        Ore: {type: String, default: 0}
    },

    games: {
        minesweeper: {
            beginnerBestTime: {type: Number, default: 9999},
            intermediateBestTime: {type: Number, default: 9999},
            expertBestTime: {type: Number, default: 9999}
        }
    }
    
},
{timestamps: true}
);

const Wallet = mongoose.model('wallet', walletSchema);

module.exports = Wallet;