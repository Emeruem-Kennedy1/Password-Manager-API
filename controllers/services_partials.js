const [User, Service] = require('../db/users_database');


// * get all services for a user 
function findUsersServices(req, res, userID) {
    Service.find({
        user: userID
    }, (err, services) => {
        if (err) {
            res.send(err);
        } else {
            res.json(services);
        }
    });
}

function getServices(req, res) {
    User.findOne({
        username: req.params.user
    }, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            if (user) {
                userID = user._id;
                findUsersServices(req, res, userID);
            } else {
                res.send('No user found');
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
            res.send(err);
        } else {
            service.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json({
                        message: 'Service created!'
                    });
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
            res.send(err);
        } else {
            if (user) {
                createAndSaveService(req, res, user);
            } else {
                res.send('No user found');
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
            res.send(err);
        } else {
            if (user) {
                user.services = [];
                user.save((err) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send('All services deleted');
                    }
                });
            } else {
                res.send('No user found');
            }
        }
    });
}




module.exports = {
    getServices,
    postServices,
    deleteServices
};