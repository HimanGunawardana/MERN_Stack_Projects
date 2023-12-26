//import app
//const app = require('./app');

const express =require('express');
const app = express();
const cors = require('cors');

const port = 3003 ;
const host = 'localhost';

const mongoose = require('mongoose');
const router = require('./router');


app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://HimanHG:Liyanage2020@cluster0.qjbeecd.mongodb.net/?retryWrites=true&w=majority';

            

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


const server = app.listen(port, host, () => {
    console.log(`Node server is listning to ${server.address().port}`)
});

app.use('/api', router);
