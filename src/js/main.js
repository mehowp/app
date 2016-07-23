var angular = require('angular');
var $ = window.jQuery = require('jquery');

var controllers = require('./controllers/_'),
    services = require('./services/_'),
    directives = require('./directives/_');

var uirouter = require('angular-ui-router')
    animate = require('angular-animate'),
    resource = require('angular-resource');

var app = angular.module('MyApp', [controllers, services, directives,
                                  uirouter, animate, resource]);
app.config(require('./config/routes'));
app.run(require('./config/run'));
