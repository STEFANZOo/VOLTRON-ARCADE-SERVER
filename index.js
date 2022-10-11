const express = require('express');
const mongoAtlasDB = require('./mongoAtlasDB');
const walletModel = require('./mongoModels/wallet');
const signUp = require('./Authentication/signUp');
const login = require('./Authentication/login');
const postBestTime = require('./utilities')

const PORT = process.env.PORT || 3001;

const app = express();
mongoAtlasDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/api' , (req, res) => {
    res.json({message: "Hello from server!", points: 10});
});

app.post('/signUp', (req, res) => {

    signUp(req, res);

    //const data = new walletModel(req.body);
    //console.log(data);
    //data.save()
    //.then(item => {
        //res.send('Wallet created!')
    //.catch(err => {
        //res.sendStatus(400).send('error')
    });
    //});
//});

app.get('/gameEngine', (req, res) => {
    res.status(200).json(1000);
})

app.post('/login', (req, res)=>{
    login(req, res);
});

app.post('/bestTime' , (req, res) => {
    const record = req.body.record;
    const player = req.body.player
    const seconds = req.body.seconds
    console.log(record)
    console.log(player)
    console.log(seconds)
    console.log('time post test')
    postBestTime.postBestTime(player , record , seconds)
})

app.listen(PORT, () => {
    console.log(`Server listening on port:  ${PORT}`);
})

// test //