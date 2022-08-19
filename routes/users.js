const express = require('express');
const authenticate = require('../controllers/admin_auth');
const {
    getUsers,
    postUsers,
    deleteUsers
} = require('../controllers/users_partials');
const {
    getUser,
    patchUser
} = require('../controllers/user_partials');
const {
    getServices,
    postServices,
    deleteServices
} = require('../controllers/services_partials');
const {
    getService,
    patchService,
    deleteService
} = require('../controllers/single_service_partials');

const router = express.Router();


// * creating the users endpoint
router.route('/:apikey/users')
    .get(authenticate, getUsers)
    .post(authenticate, postUsers)
    .delete(authenticate, deleteUsers)


// * creating the user endpoint
router.route('/:apikey/users/:emailID')
    .get(authenticate, getUser)
    .patch(authenticate, patchUser)


// * creating the services endpoint
router.route('/:apikey/users/:emailID/services')
    .get(authenticate, getServices)
    .post(authenticate, postServices)
    .delete(authenticate, deleteServices)

router.route('/:apikey/users/:emailID/services/:serviceID')
    .get(authenticate, getService)
    .patch(authenticate, patchService)
    .delete(authenticate, deleteService)

module.exports = router;