const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { mongoose } = require('./config/mongoose');
const config = require('./config/config');

const calculator = require('./routes/calculator');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use('/calculator', calculator);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        success: false,
        errorMsg: err.message || 'Something went wrong. Kindly reload the page'
    });
});

// To render front end
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'angular-app/dist/index.html'));
});

module.exports = app;