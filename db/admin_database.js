const mongoose = require('mongoose');
const md5 = require('md5');

const mongoUri = process.env.MONGODB_URI

mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// * Create the user schema and model
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    apikey: {
        type: String,
        required: true,
        unique: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);

// * Create the admin and encrypt the admin apikey to the database
const admin = Admin({
    username: process.env.ADMIN_USERNAME,
    apikey: md5(process.env.ADMIN_PASSWORD)
});

// * Save the admin to the database if the admin does not exist
Admin.findOne({ username: process.env.ADMIN_USERNAME }, (err, user) => {
    if (err) {console.log(err);} 
    else if (!user) {
        admin.save((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Admin user created with username: ${process.env.ADMIN_USERNAME} and apikey: ${admin.apikey}`);
            }
        });
    }
})


// * Export the admin and Admin model
module.exports = [Admin];