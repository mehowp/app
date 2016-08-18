const runnable = ($stateParams, $state, $timeout, $rootScope) => {
    'ngInject';

    $rootScope.$on('$viewContentLoaded',
        function(event, viewConfig) {
            var state = $state.current.name.split('.')[1];
            if (!state) {
                state = 'main';
            }
            $rootScope.style = state;

        });


}




runnable.$inject = ['$stateParams', '$state', '$timeout', '$rootScope'];
app.run(runnable);
