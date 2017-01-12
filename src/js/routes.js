(function() {
    'use strict';
    angular.module('MyApp')
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider
        .otherwise('/viewOne');

        $stateProvider
        .state({
            name: 'viewOne',
            url: '/viewOne',
            templateUrl: '/views/viewOne.html',
            controller: 'ViewOneController as viewOne'
        })
        .state({
            name: 'viewTwo',
            url: '/viewTwo',
            templateUrl: '/views/viewTwo.html',
            controller: 'ViewTwoController as viewTwo'
        });
    });
}());
