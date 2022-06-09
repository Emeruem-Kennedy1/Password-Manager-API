const {User, Service} = require('../db/users_database');
const {internalServerErrorResponse} = require('../messages/error_messages.js');
const {successMessage} = require('../messages/success_messages.js');

// * get all services for a user 
function findUsersServices(req, res, userID) {
    Service.find({
        user: userID
    }, (err, services) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            successMessage.message = 'Services found';
            successMessage.data = services;
            res.json(successMessage);
        }
    });
}

function getServices(req, res) {
    User.findOne({
        username: req.params.user
    }, (err, user) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            if (user) {
                userID = user._id;
                findUsersServices(req, res, userID);
            } else {
                successMessage.message = 'No user found';
                successMessage.data = [];
                res.json(successMessage);
            }
        }
    });
}




// * create a service for a user
function createAndSaveService(req, res, user) {
    const service = new Service({
        password: req.body.password,
        serviceName: req.body.serviceName,
        username: req.body.username,
        user: user._id,
    });
    service.save((err) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            service.save((err) => {
                if (err) {
                    internalServerErrorResponse.message = err;
                    res.json(internalServerErrorResponse);
                } else {
                    successMessage.message = 'Service created';
                    successMessage.data = service;
                    res.json(successMessage);
                }
            });
        }
    });
}

function postServices(req, res) {
    User.findOne({
        username: req.params.user
    }, (err, user) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            if (user) {
                createAndSaveService(req, res, user);
            } else {
                successMessage.message = 'No user found';
                successMessage.data = [];
                res.json(successMessage);
            }
        }
    });
}




// * delete all services for a user
function deleteServices(req, res) {
    User.findOne({
        username: req.params.user
    }, (err, user) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            if (user) {
                user.services = [];
                user.save((err) => {
                    if (err) {
                        internalServerErrorResponse.message = err;
                        res.json(internalServerErrorResponse);
                    } else {
                        successMessage.message = 'Services deleted';
                        successMessage.data = user;
                        res.json(successMessage);
                    }
                });
            } else {
                successMessage.message = 'No user found';
                successMessage.data = [];
                res.json(successMessage);
            }
        }
    });
}




module.exports = {
    getServices,
    postServices,
    deleteServices
};