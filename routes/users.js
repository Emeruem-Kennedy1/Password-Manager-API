const express = require('express');
const [User, Password] = require('../db/users_database');
const authenticate = require('../routes/admin_auth');
const {getUsers, postUsers, deleteUsers} = require('../scripts/users_partials');
const {getUser,} = require('../scripts/user_partials');


const router = express.Router();

// * routing the user 
router.route('/:apikey/users/:user')
    .get(authenticate, getUser)



/*
    * The get request returns all usernames in the database
    * The post request will create a new user
    * The delete request will delete all users i.e clear the database
*/

router.route('/:apikey/users')
    .get(getUsers)
    .post(postUsers)
    .delete(deleteUsers)

module.exports = router;
