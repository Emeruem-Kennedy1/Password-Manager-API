const [User, Password] = require('../db/users_database');

function getUsers(req, res) {
    User.find({}, (err, users) => {
        if (err) {console.log(err);} 
        else if (users) {
            const usernames = users.map(user => user.username);
            res.send(usernames);
        } else {
            res.send('No users found');
        }
    }); 
};

function postUsers(req, res) {
    console.log(req.body);
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });
    user.save((err) => {
        if (err) {console.log(err);} 
        else {
            res.send('User successfully created');
        }
    })
};

function deleteUsers (req, res) {
    User.deleteMany({}, (err) => {
        if (err) {console.log(err);} 
        else {
            res.send('All users deleted');
        }
    })
};

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
};