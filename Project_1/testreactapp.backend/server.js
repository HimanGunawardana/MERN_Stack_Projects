//import app
//const app = require('./app');

const express =require('express');
const app = express();
const cors = require('cors');

const port = 3000;
const host = '127.0.0.1';

const mongoose = require('mongoose');
const router = require('./router');


app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://HimanHG1:Liyanage20200@cluster0.qjbeecd.mongodb.net/?retryWrites=true&w=majority';

//create connect function
const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch{
        console.log('MongoDB Error: ',error);
    }
};

connect();


const server = app.listen(3001, host, () => {
    console.log(`Node server is listning to ${server.address().port}`)
});

app.use('/api', router);
