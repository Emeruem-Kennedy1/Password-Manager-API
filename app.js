require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const users = require('./routes/users');

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

// * use the users route to get a user
app.use('/api/v1', users);

app.use((req, res, next) => {
    res.contentType('application/json');
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World');
});





const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});