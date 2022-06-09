const [Admin] = require('../db/admin_database');
const {accesDeniedErrorResponse} = require('../messages/error_messages.js');


// * Authenticate the admin user

var isAuthenticated = false;

function authenticate(req, res, next) {
    
    Admin.findOne({
        apikey: req.params.apikey
    }, (err, user) => {
        if (err) {console.log(err);} 
        else if (user) {
            if (req.params.apikey === user.apikey) {
                isAuthenticated = true;
                next();
            } else {
                res.json(accesDeniedErrorResponse);
            }
        } else {
            res.json(accesDeniedErrorResponse);
        }
    })
}



module.exports = authenticate;