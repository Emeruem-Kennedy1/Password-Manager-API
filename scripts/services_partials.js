const [User, Service] = require('../db/users_database');

function findUsersServices(req, res, services) {
    Service.find({_id: {$in: services}}, (err, services) => {
        if (err) {
            res.send(err);
        } else {
            res.json(services);
        }
    });
}

function createAndSaveService(req,res, user) {
    const service = new Service({
        password: req.body.password,
        serviceName: req.body.serviceName,
        username: req.body.username,
    });
    service.save((err) => {
        if (err) {res.send(err);}
        else {
            console.log('service saved');
            user.services.push(service._id);
            user.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send('Service successfully created');
                }
            });
        }
    });
}


function getServices(req, res) {
    User.findOne({username: req.params.user}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            if (user) {
                const services = user.services;
                findUsersServices(req, res, services);
            } else {
                res.send('No user found');
            }
        }
    });
}


function postServices(req, res) {
    User.findOne({username: req.params.user}, (err, user) => {
        if (err) {res.send(err);} 
        else {
            if (user) {
                createAndSaveService(req, res, user);
            } else {
                res.send('No user found');
            }
        }
    });
}

function deleteServices(req, res) {
    User.findOne({username: req.params.user}, (err, user) => {
        if (err) {res.send(err);} 
        else {
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




module.exports = {getServices, postServices, deleteServices};