/**********************************************
	do not touch this file, it bootstraps
	each controller file - remember
	-------------------------------
	CONTROLLER_NAME.controller.js
	-------------------------------
	ALWAYS	specify file location
			at top level

	template:

	// in models/model_name.model.js 
	let model = (sequelize, DataTypes) => {
	    return database.define('User', {
	        key: DataTypes.STRING,
	    }, {
	        instanceMethods: {
	            Method1: function() {
	            },
	            Method2: function() {
	            }
	        }
	    });	
	}
	module.exports = model;


	usage:
	var User = app.get('models').User

***********************************************/
































const fs = require('fs');
const Sequelize = require('sequelize'); // database

global.database = new Sequelize(config.db.name,
    config.db.user,
    config.db.password, { host: config.db.host, dialect: 'mysql' });

// Bootstrap models
var models = [];
fs.readdirSync(__dirname)
    .filter(file => ~file.search(/^[^\.].*\.model.js$/))
    .forEach(model => {
    	models.push(__dirname + '/' + model);
});

models.forEach(function(model) {
  module.exports[model] = database.import(model);
});

module.exports.database = database;

