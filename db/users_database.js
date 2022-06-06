const mongoose = require('mongoose');
const [Admin] = require('../db/admin_database');


// * this is the user scema that stores the user information
// * services are the services that the user has stored on our database
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    services: {
        type: Array,
    }
});

// * This is the password schema. a password is a combination of the service, username, and password. the password will be stored in the user's passwords array.
const passwordSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const Password = mongoose.model('Password', passwordSchema);
const User = mongoose.model('User', userSchema);


module.exports = [User, Password];