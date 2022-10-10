const {User} = require('../db/users_database');
const {internalServerErrorResponse} = require('../messages/error_messages.js');
const {successMessage} = require('../messages/success_messages.js');
const bcrypt = require('bcrypt');

function getUser(req, res) {
    User.findOne({
        email: req.params.emailID
    }, (err, user) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.send(internalServerErrorResponse);
        } else if (user) {
            successMessage.message = 'User found';
            successMessage.data = user;
            // successMessage.data.password = '******';
            res.send(successMessage);
        } else {
            res.send('User not found');
        }
    })
}

function patchUser(req, res) {
    User.findOne({
        email: req.params.emailID
    }, (err, user) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.send(internalServerErrorResponse);
        } else if (user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    internalServerErrorResponse.message = err;
                    res.send(internalServerErrorResponse);
                } else {
                    user.password = hash;
                    user.save((err) => {
                        if (err) {
                            internalServerErrorResponse.message = err;
                            res.send(internalServerErrorResponse);
                        } else {
                            successMessage.message = 'User updated';
                            successMessage.data = user;
                            res.json(successMessage);
                        }
                    });
                }
            });
        } else {
            successMessage.message = 'User not found';
            successMessage.data = [];
            res.json(successMessage);
        }
    })
}




module.exports = {
    getUser,
    patchUser,
};