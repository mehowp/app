const routes = ($stateProvider, $locationProvider, $urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
    $stateProvider
    //home
        .state('parent', {
            abstract: true,
            template: '<ui-view/>',
            resolve: {
                '': ($timeout, $rootScope, $state) => {
                }
            }
        })
        .state('parent.main', {
            url: '/',
            templateUrl: 'user/home/index.html'
        })

        .state('parent.admin', {
            url: '/admin',
            templateUrl: 'admin/dashboard/index.html'
        })

}

routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
app.config(routes);
