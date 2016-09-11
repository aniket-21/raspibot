'use strict';

var express = require('express');
var authRouter = express.Router();


module.exports = function() {

	authRouter.route('/right')
		.post(function(req, res){
			console.log('right button was triggered');
		});

	authRouter.route('/left')
		.post(function(req, res){
			console.log('left button was triggered');
		});

	authRouter.route('/forward')
		.post(function(req, res){
			console.log('forward button was triggered');
		});

	authRouter.route('/backward')
		.post(function(req, res){
			console.log('backward button was triggered');
		});

	return authRouter;
};