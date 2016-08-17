/**********************************************
	do not touch this file, it bootstraps
	each controller file - remember
	-------------------------------
	CONTROLLER_NAME.controller.js
	-------------------------------
	ALWAYS	specify file location
			at top level

	template:

	//in controllers/Main
	let controller = (req, res) => {
	    res.render('index');
	}

	module.exports = {
	    route: '/',
	    controller: controller

	}


***********************************************/













































const fs = require('fs');
const express = require('express');
const router = express.Router();

// Bootstrap controllers
var routes = [];
fs.readdirSync(__dirname)
    .filter(file => ~file.search(/^[^\.].*\.controller.js$/))
    .forEach(model => {
    	routes.push(__dirname + '/' + model);
});

routes.forEach(function(controller) {
  var file = require(controller);
  router.get(file.route, file.controller);

});

module.exports = router
