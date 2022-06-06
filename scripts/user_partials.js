const [User, Password] = require('../db/users_database');
const md5 = require('md5');

function getUser(req, res) {
    User.findOne({username: req.params.user}, (err, user) => {
        if (err) {console.log(err);} 
        else if (user) {
            res.send(user.services);
        } else {
            res.send('User not found');
        }
    })
}



module.exports = {
    getUser,
};