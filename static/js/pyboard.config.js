(function (){
    'use strict';

    angular.module('pyboard.app')
        .config(['$routeProvider', config])
        .run(['$http', run]);

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/static/html/pyboard.html',
                controller: 'PyboardController',
            })
            .when('/login', {
                templateUrl: '/static/html/login.html'
            })
            .otherwise('/');
    }

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();