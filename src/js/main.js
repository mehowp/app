const angular = require('angular');
var $ = window.jQuery = require('jquery');
const socket = require('socketio-client')();

var controllers = require('controllers'),
    services = require('services'),
    directives = require('directives');

var uirouter = require('angular-ui-router')
    animate = require('angular-animate'),
    resource = require('angular-resource');

var app = angular.module('MyApp', [controllers, services, directives,
                                  uirouter, animate, resource]);
app.config(require('./config/routes'));
app.run(require('./config/run'));
