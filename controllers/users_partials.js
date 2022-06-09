const {User, Password} = require('../db/users_database');
const {internalServerErrorResponse} = require('../messages/error_messages.js');
const {successMessage} = require('../messages/success_messages.js');
const bcrypt = require('bcrypt');

function getUsers(req, res) {
    User.find({}, (err, users) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else if (users) {
            const usernames = users.map(user => user.username);
            successMessage.data = usernames;
            successMessage.message = 'Users retrieved successfully';
            res.json(successMessage);
        } else {
            successMessage.data = [];
            successMessage.message = 'No users found';
            res.json(successMessage);
        }
    });
};

function postUsers(req, res) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            const user = new User({
                username: req.body.username,
                password: hash,
                email: req.body.email,
            });
            user.save((err) => {
                if (err) {
                    internalServerErrorResponse.message = err;
                    res.json(internalServerErrorResponse);
                } else {
                    successMessage.data = user;
                    successMessage.message = 'User created successfully';
                    res.json(successMessage);
                }
            })
        }
    });
};

function deleteUsers(req, res) {
    User.deleteMany({}, (err) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            successMessage.message = 'Users deleted successfully';
            res.json(successMessage);
        }
    })
};

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
};