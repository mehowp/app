var angular = require('angular');
var ctrls = angular.module('controllers', [])

ctrls.controller('MainController', ['$transport', '$rootScope', '$scope', require('./MainController')])


module.exports = 'controllers';
