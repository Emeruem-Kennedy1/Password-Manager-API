const {User, Password} = require('../db/users_database');
const {internalServerErrorResponse} = require('../messages/error_messages.js');
const {successMessage} = require('../messages/success_messages.js');
const bcrypt = require('bcrypt');
const md5 = require('md5');
const { v4: uuidv4 } = require('uuid');

function getUsers(req, res) {
    User.find({}, (err, users) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else if (users) {
            const userEmails = users.map(user => user.email);
            successMessage.data = userEmails;
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
            console.log(err);
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            const user = new User({
                username: req.body.username,
                password: hash,
                email: md5(req.body.email),
                uid: uuidv4(),
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