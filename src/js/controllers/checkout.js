(function(){
    'use strict';
    angular.module('InventoryManager')
    .controller('CheckoutController', checkoutCtrl);

    function checkoutCtrl(ShoppingCart){
        var vm = this;
        vm.clearCart = clearCart;

        vm.orders = ShoppingCart.orders;

        function clearCart(){
            ShoppingCart.orders.length = 0;
        }
    }

})();
