const Mongoose = require('mongoose');

const mongoAtlasDB = async () => {
    await Mongoose.connect("mongodb+srv://Stefan:Mongoman22@cluster-eternal.x09h7.mongodb.net/Eternal-DB?retryWrites=true&w=majority")
    .then(console.log('MongoDB connected!'));
    
}

module.exports = mongoAtlasDB;