(function(){
    'use strict';
    angular.module('InventoryManager')
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = $localStorage.token;
                        config.headers['Access-Control-Allow-Origin'] = '*';
                        config.headers['Content-Type'] = 'application/json';
                    }
                    return config;
                },
                'responseError': function (response) {
                    if([401].indexOf(response.status)){
                        delete $localStorage.token;
                        $location.path('/signin'); //YOU MIGHT WANT TO CHANGE THIS ROUTE
                    }
                    return $q.reject(response);
                }
            };
        }]);
    }]);
})();
