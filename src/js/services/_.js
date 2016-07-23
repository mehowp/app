var angular = require('angular');
var srvcs = angular.module('services', []);

srvcs.service('$transport', require('./TransportService'))

module.exports = 'services';
