const {User, Service} = require('../db/users_database');
const {internalServerErrorResponse} = require('../messages/error_messages.js');
const {successMessage} = require('../messages/success_messages.js');


const getService = (req, res) => {
    Service.findById(req.params.serviceID, (err, service) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            successMessage.data = service;
            successMessage.message = 'Service retrieved successfully';
            res.json(successMessage);
        }
    });
}; 

const patchService = (req, res) => {
    Service.findByIdAndUpdate(
        req.params.serviceID,
        req.body, {
            new: true
        },
        (err, service) => {
            if (err) {
                internalServerErrorResponse.message = err;
                res.json(internalServerErrorResponse);
            } else {
                successMessage.data = service;
                successMessage.message = 'Service updated successfully';
                res.json(successMessage);
            }
        });
}

const deleteService = (req, res) => {
    Service.findByIdAndRemove(req.params.serviceID, (err, service) => {
        if (err) {
            internalServerErrorResponse.message = err;
            res.json(internalServerErrorResponse);
        } else {
            successMessage.data = service;
            successMessage.message = 'Service deleted successfully';
            res.json (successMessage);
        }
    });
}


module.exports = {
    getService,
    patchService,
    deleteService
}