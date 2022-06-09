const [User, Service] = require('../db/users_database');


const getService = (req, res) => {
    Service.findById(req.params.serviceID, (err, service) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(service);
        }
    })
}

const patchService = (req, res) => {
    Service.findByIdAndUpdate(
        req.params.serviceID,
        req.body, {
            new: true
        },
        (err, service) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(service);
            }
        });
}

const deleteService = (req, res) => {
    Service.findByIdAndRemove(req.params.serviceID, (err, service) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Service deleted');
        }
    });
}


module.exports = {
    getService,
    patchService,
    deleteService
}