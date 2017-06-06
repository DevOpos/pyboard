(function() {
    'use strict';

    angular.module('pyboard.app')
        .directive('pyboardCard', CardDirective)

    function CardDirective() {
        return{
            templateUrl: 'static/pyboard/card.html',
            restrict: 'E'
        };
    }
})();