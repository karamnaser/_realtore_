var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var apartmentrouter=require('./routes/apartments');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginrouter=require('./routes/login');
var signinrouter = require('./routes/sign_in');
var countryrouter = require('./routes/country');
var citierouter = require('./routes/cites');
var imegesrout=require('./routes/imegs');
var cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apartments',apartmentrouter)
app.use('/login',loginrouter);
app.use('/signin',signinrouter);
app.use('/country',countryrouter);
app.use('/cites',citierouter);
app.use('/imges',imegesrout);

module.exports = app;
