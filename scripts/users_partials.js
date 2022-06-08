const [User, Password] = require('../db/users_database');
const bcrypt = require('bcrypt');

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
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {console.log(err);}
        else {
            const user = new User({
                username: req.body.username,
                password: hash,
                email: req.body.email,
            });
            user.save((err) => {
                if (err) {console.log(err);} 
                else {
                    res.send('User successfully created');
                }
            })
        }
    });
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