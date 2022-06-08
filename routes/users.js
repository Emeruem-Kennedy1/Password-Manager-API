const express = require('express');
const authenticate = require('../routes/admin_auth');
const {getUsers, postUsers, deleteUsers} = require('../scripts/users_partials');
const {getUser} = require('../scripts/user_partials');
const {getServices, postServices, deleteServices} = require('../scripts/services_partials');
const {getService,patchService,deleteService } = require('../scripts/single_service_partials');

const router = express.Router();


// * creating the users endpoint
router.route('/:apikey/users')
    .get(authenticate,getUsers)
    .post(authenticate,postUsers)
    .delete(authenticate,deleteUsers)


// * creating the user endpoint
router.route('/:apikey/users/:user')
    .get(authenticate, getUser)
    // TODO add a patch method to update a user by changing username or password


// * creating the services endpoint
router.route('/:apikey/users/:user/services')
    .get(authenticate, getServices)
    .post(authenticate, postServices)
    .delete(authenticate, deleteServices)

router.route('/:apikey/users/:user/services/:serviceID')
    .get(authenticate, getService)
    .patch(authenticate, patchService)
    .delete(authenticate, deleteService)

module.exports = router;
