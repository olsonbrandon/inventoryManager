(function(){
    'use strict';
    angular.module('InventoryManager')
    .directive('boCart',cartDirective);

    function cartDirective(){
        return{
            restrict: 'E',
            templateUrl: 'views/shoppingCart/shoppingCart.html',
            scope: {
                orders: '<',
                checkout: '&'
            },
            controller: 'ShoppingCart as cart',
            bindToController: true
        };
    }
})();
