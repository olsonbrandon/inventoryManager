(function(){
    'use strict';
    angular.module('InventoryManager')
    .controller('ParentController', parentCtrl);

    function parentCtrl(Auth, $rootScope, $scope, $state, ShoppingCart){
        var vm = this;


        var deregister = [];
        vm.isLogged = isLogged;
        vm.loggedIn = Auth.loggedIn;
        vm.logout = logout;
        vm.toCheckout = toCheckout;
        deregister.push($rootScope.$on('loggedIn', isLogged));
        deregister.push($rootScope.$on('loggedOff', isLogged));
        isLogged();

        $scope.$watch(function() { return ShoppingCart.orders; }, function() {
            vm.orders = ShoppingCart.orders;
        });

        $scope.$on('$destroy', function(){
            for (var i = 0; i < deregister.length; i++) {
                deregister[i]();
            }
        });

        function isLogged(){
                vm.loggedIn = Auth.loggedIn;
        }

        function logout(){
            if (Auth.loggedIn){
                Auth.logout();
                $rootScope.$emit('loggedOff');
            }
        }
        function toCheckout(){
            return $state.go('checkout');
        }
    }
})();
