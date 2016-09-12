'use strict';

var express = require('express');
var previewRouter = express.Router();
var path = require('path');
var sleep = require('sleep');


module.exports = function() {

	previewRouter.route('/')
		.get(function(req, res) {

			var previewDelay = 10000;

			if(typeof req.query.pDelay != 'undefined') {
				previewDelay = req.query.pDelay;
			}

			//sleep.usleep(40000);
			setTimeout(function() {
				//res.sendFile(path.resolve( __dirname  + '/../../resources/img/icons/small-logo.png'));
				res.sendFile('/dev/shm/mjpeg/cam.jpg');
			},previewDelay/1000);
		});

	return previewRouter;
};
