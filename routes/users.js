const express = require('express');
const [User, Password] = require('../db/users_database');
const authenticate = require('../routes/admin_auth');
const bodyParser = require('body-parser');
const { append } = require('express/lib/response');


const router = express.Router();


router.get('/:apikey/Users/user', (req, res) => {
    res.send('Welcome to the admin page');

})

// * routing the useer 
router.route('/:apikey/users/:user')
    .get(authenticate, (req, res) => {
        User.findOne({username: req.params.user}, (err, user) => {
            if (err) {console.log(err);} 
            else if (user) {
                res.send(user);
            } else {
                res.send('User not found');
            }
        })
    })


/*
    * The get request returns all usernames in the database
    * The post request will create a new user
    * The delete request will delete all users i.e clear the database
*/

router.route('/:apikey/users')
    .get((req, res) => {
        User.find({}, (err, users) => {
            if (err) {console.log(err);} 
            else if (users) {
                const usernames = users.map(user => user.username);
                res.send(usernames);
            } else {
                res.send('No users found');
            }
        }); 
    })
    
    .post((req, res) => {
        console.log(req.body);
        const user = new User({
            username: req.body.username,
            password: req.body.password,
        });
        user.save((err) => {
            if (err) {console.log(err);} 
            else {
                res.send('User successfully created');
            }
        })
    })
    .delete((req, res) => {
        User.deleteMany({}, (err) => {
            if (err) {console.log(err);} 
            else {
                res.send('All users deleted');
            }
        })
    })

module.exports = router;
