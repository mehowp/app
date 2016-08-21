const routes = ($stateProvider, $locationProvider, $urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
    $stateProvider
    //home
        .state('parent', {
            abstract: true,
            template: '<ui-view ng-cloak class="ng-cloak" />',
            resolve: {
                '': ($timeout, $rootScope, $state) => {
                    if($rootScope.style){
                      return true;
                    }
                }
            }
        })
        .state('parent.main', {
            url: '/',
            templateUrl: 'user/home/index.html'
        })

        .state('parent.admin', {
            url: '/admin',
            templateUrl: 'admin/dashboard/index.html',
            resolve: {
                '': ($timeout, $rootScope, $state) => {
                    if($rootScope.style){
                      return true;
                    }
                }
            }
        })

}

routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
app.config(routes);
