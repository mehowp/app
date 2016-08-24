let TransportService = ($rootScope) => {
	'ngInject';
	this.data = [];

	return this;
}

TransportService.$inject = ['$rootScope'];

app.service('TransportService', TransportService);