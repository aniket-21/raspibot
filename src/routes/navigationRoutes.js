'use strict';

var express = require('express');
var navigationRouter = express.Router();
var Navigator = require('../controller/navigator.js');
var navigator = new Navigator();

module.exports = function() {

	//let navigator = new Navigator();

	navigationRouter.route('/right')
		.post(function(req, res) {
			console.info('right button was triggered');
			navigator.move("right");
			res.set(200);
			res.end();
		});

	navigationRouter.route('/left')
		.post(function(req, res) {
			console.info('left button was triggered');
			navigator.move("left");
			res.set(200);
			res.end();
		});

	navigationRouter.route('/forward')
		.post(function(req, res) {
			console.info('forward button was triggered');
			navigator.move("forward");
			res.set(200);
			res.end();
		});

	navigationRouter.route('/backward')
		.post(function(req, res) {
			console.info('backward button was triggered');
			navigator.move("backward");
			res.set(200);
			res.end();
		});

	return navigationRouter;
};