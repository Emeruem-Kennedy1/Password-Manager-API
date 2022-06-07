const [User, Service] = require('../db/users_database');

function getServices(req, res) {
    User.findOne({username: req.params.user}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            if (user) {
                const services = user.services;
                res.send(services);
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
                const service = new Service({
                    password: req.body.password,
                    serviceName: req.body.serviceName,
                    username: req.body.username,
                });
                user.services.push(service);
                user.save((err) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send('Service successfully created');
                    }
                });
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