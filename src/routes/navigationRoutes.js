'use strict';

var express = require('express');
var navigationRouter = express.Router();


module.exports = function() {

	navigationRouter.route('/right')
		.post(function(req, res){
			console.log('right button was triggered');
		});

	navigationRouter.route('/left')
		.post(function(req, res){
			console.log('left button was triggered');
		});

	navigationRouter.route('/forward')
		.post(function(req, res){
			console.log('forward button was triggered');
		});

	navigationRouter.route('/backward')
		.post(function(req, res){
			console.log('backward button was triggered');
		});

	return navigationRouter;
};