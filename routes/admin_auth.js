const express = require('express');
const [Admin] = require('../db/admin_database');


// * Authenticate the admin user

var isAuthenticated = false;

function authenticate(req, res, next) {
    Admin.findOne({apikey: req.params.apikey}, (err, user) => {
        if (err) {console.log(err);} 
        else if (user) {
            if (req.params.apikey === user.apikey) {
                isAuthenticated = true;
                next();
            } else {
                res.send('You are not authorized to view this page');
            }
        } else {
            res.send('You are not authorized to view this page');
        }
    })
}



module.exports = authenticate;