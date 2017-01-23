(function() {
    'use strict';
    angular.module('InventoryManager')
    .controller('LoginController', loginCtrl);

    function loginCtrl(Auth, $state, $rootScope){
        var vm = this;

        vm.login = login;

        vm.creds = {
            email: null,
            password: null
        };

        function login(creds){
            Auth.login(creds).then(function(response){
                $state.go('products');
                $rootScope.$emit('loggedIn');
            }, function(err){
// hey it didnt work
                });
            vm.creds = {};
        }
    }
}());

// email: randomemail8@gmail.com
// password: random8
