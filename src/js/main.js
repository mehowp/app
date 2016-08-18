import angular from "angular";
import uirouter from "angular-ui-router";
import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

global.app = angular.module('MyApp', [uirouter]);

export
default angular.element(document).ready(function() {
    angular.bootstrap(document, [app.name], {
        strictDi: true
    });
})