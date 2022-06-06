const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const md5 = require('md5');
const app = express();


require('dotenv').config();

const users = require('./routes/users');
app.use(bodyParser.urlencoded({extended: true}));

// * use the users route to get a user
app.use('/api', users);


app.get('/', (req, res) => {
    res.send('Hello World');
});





const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});