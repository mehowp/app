module.exports = function($urlRouterProvider, $stateProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('parent', {
            url: '',
            controller: 'MainController',
            controllerAs: 'MainCtrl',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'header.html'
                },
                'footer': {
                    templateUrl: 'footer.html'
                },
                '': {
                    template: '<ui-view />'
                }
            }
        })
        .state('parent.home', {
            url: '/',
            templateUrl: 'home/index.html'

        })
        .state('parent.contact', {
            url: '/contact',
            templateUrl: 'home/contact.html'

        })

    $locationProvider.html5Mode(true);
}
