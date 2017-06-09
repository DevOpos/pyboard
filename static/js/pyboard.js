(function(){
    'use strict';

    angular.module('pyboard.app',['ngRoute'])
        .controller('PyboardController',
         ['$scope','$http', PyboardController]);

    function PyboardController($scope, $http) {
        $scope.add = function (list, title, story_points, business_value){
            var card = {
                list: list.id,
                title: title,
                story_points: story_points,
                business_value: business_value

            };
            $http.post('/pyboard/cards/', card)
                .then(function(response){
                    list.cards.push(response.data);
                },
                function(){
                    alert('Could not create card');
                });
        };

        $scope.logout = function(){
            $http.get('/auth_py_api/logout/')
                .then(function () {
                    $location.url('/login');
                });
        }

        $scope.data = [];
        $http.get('/pyboard/lists/').then(
            function(response){
                $scope.data = response.data;
            }
        );
    }
}());