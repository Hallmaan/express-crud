const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('promise-mysql');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


// Route
app.use('/users', require('./routes/users'));

// Server

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);