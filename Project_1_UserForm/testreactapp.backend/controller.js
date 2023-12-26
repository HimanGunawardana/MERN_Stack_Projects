const User = require('./model');


const getUsers = (req, res, next) => {
    User.find()
        .then(response => {         //promissers
            res.json({ response})
        })
        .catch(error => {
            res.json({ error })
        })
};


const addUser = (req, res, next) => {
    const user = new User ({
        id: req.body.id,
        name: req.body.name,
    })
    user.save()
        .then(response => {         //promissers
            res.json({ response})
        })
        .catch(error => {
            res.json({ error })
        })
};


const updateUser = (req, res, next) => {
    const {id, name} = req.body;    //d structer
    User.updateOne({ id: id}, {$set: { name: name }})
        .then(response => {         //promissers
            res.json({ response})
        })
        .catch(error => {
            res.json({ message: error})
        })
};


const deleteUser = (req, res, next) => {
    const {id, name} = req.body;
    User.deleteOne({ id: id}, {$set: { name: name }})
        .then(response => {         //promissers
            res.json({ response})
        })
        .catch(error => {
            res.json({ message: error})
        })
};


exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

