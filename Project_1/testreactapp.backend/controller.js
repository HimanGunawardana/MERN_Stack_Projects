const users = [
    {
        id: 1,
        name: 'Himan',
    },
    {
        id:2,
        name: 'Liyanage',
    },
];

const getUsers = (cb) => {
    cb(users);
};

const getUseById = (id, cb) => {
    const user = users.find(user => user.id == id);
    cb(user);
};

exports.getUsers = getUsers;
exports.getUseById = getUseById;
