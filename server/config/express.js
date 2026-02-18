const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

let indexRouter = require('../app/routers/index');
let projectsRouter = require('../app/routers/projects');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/projects', projectsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // render the error json
    res.status(err.status || 500);
    res.json(
        {
            success: false,
            message: err.message
        }
    );
});

module.exports = app;