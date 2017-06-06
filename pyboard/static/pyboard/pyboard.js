(function(){
    'use strict';
    angular.module('pyboard.app',[])
        .controller('PyboardController',
         ['$scope','$http', PyboardController]);

    function PyboardController($scope, $http) {
        $scope.add = function (list, title){
            var card = {
                title: title
            }
            list.cards.push(card)
        };

        $scope.data = [];
        $http.get('/pyboard/lists').then(function(response){
            $scope.data = response.data;
        });
    }
}());