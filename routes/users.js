const express = require('express');
const [User, Service] = require('../db/users_database');
const authenticate = require('../routes/admin_auth');
const {getUsers, postUsers, deleteUsers} = require('../scripts/users_partials');
const {getUser} = require('../scripts/user_partials');
const {getServices, postServices, deleteServices} = require('../scripts/services_partials');

const router = express.Router();


// * creating the users endpoint
router.route('/:apikey/users')
    .get(authenticate,getUsers)
    .post(authenticate,postUsers)
    .delete(authenticate,deleteUsers)


// * creating the user endpoint
router.route('/:apikey/users/:user')
    .get(authenticate, getUser)


// * creating the services endpoint
router.route('/:apikey/users/:user/services')
    .get(authenticate, getServices)
    .post(authenticate, postServices)
    .delete(authenticate, deleteServices)


module.exports = router;
