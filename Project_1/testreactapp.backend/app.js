const express =require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

//middleware1
app.use(cors());

//middleware2
app.use(
    express.urlencoded({
        extended: true,
    })
);

//middleware3
app.use(express.json());

app.get('/users', (req, res) =>{
    var resObj = [];
    controller.getUsers(users => {
        res.send(users);
    })

});

app.get('/user', (req, res) => {
    const id = req.query.id;
    controller.getUseById(id, user => {
        res.send(user);
    })
})

module.exports = app;