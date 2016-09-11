"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

//Define Routes
var authRouter = require('./src/routes/navigationRoutes.js')();

//Middleware
app.use(express.static('resources'));

app.set('views','./src/views');
app.set('view engine','ejs');

//Use Routes
app.use('/', authRouter);

app.listen(port, function(err) {
	console.log('running server on port ' + port);
});

app.get('/', function(req, res) {
	res.render('autobot');
});

