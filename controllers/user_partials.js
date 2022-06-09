const [User, Password] = require('../db/users_database');
const bcrypt = require('bcrypt');

function getUser(req, res) {
    User.findOne({
        username: req.params.user
    }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (user) {
            res.send(user);
        } else {
            res.send('User not found');
        }
    })
}

function patchUser(req, res) {
    User.findOne({
        username: req.params.user
    }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    console.log(err);
                } else {
                    user.password = hash;
                    user.save((err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send('User updated');
                        }
                    });
                }
            });
        } else {
            res.send('User not found');
        }
    })
}




module.exports = {
    getUser,
    patchUser,
};