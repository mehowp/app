import angular from "angular";

const mainApp = angular.module('MyApp', [])
    .run(() => {
        console.log('hello')
    })

export
default angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApp.name], {
        strictDi: true
    });
})