(function(){
    'use strict';

    angular.module('pyboard.app',[])
        .controller('PyboardController',
         ['$scope','$http', PyboardController]);

    function PyboardController($scope, $http) {
        $scope.add = function (list, title){
            var card = {
                list: list.id,
                title: title

            };
            $http.post('/pyboard/cards/', card)
                .then(function(response){
                    list.cards.push(response.data);
                },
                function(){
                    alert('Could not create card');
                });
        };

        $scope.login = function(){
            $http.post('/auth_py_api/login/',
                {username: 'damian', password: 'Test1234'});
        };

        $scope.data = [];
        $http.get('/pyboard/lists/').then(
            function(response){
                $scope.data = response.data;
            }
        );
    }
}());