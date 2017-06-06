(function(){
    'use strict';
    angular.module('pyboard.app',[])
        .controller('PyboardController', ['$scope',PyboardController]);

    function PyboardController($scope) {
        $scope.add = function (list, title){
            var card = {
                title: title
            }
            list.cards.push(card)
        }
        $scope.data = [
            {
                name: 'pyboard1',
                cards: [
                    {
                        title: 'TestA1'
                    },
                    {
                        title: 'TestB1'
                    },
                    {
                        title: 'TestC1'
                    },
                ]
            },
            {
                name: 'pyboard2',
                cards: [
                    {
                        title: 'TestA2'
                    },
                    {
                        title: 'TestB2'
                    },
                    {
                        title: 'TestC3'
                    },
                ]
            }
        ];
    }
}());