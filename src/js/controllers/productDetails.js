(function(){
    'use strict';
    angular.module('InventoryManager')
    .controller('ProductDetailsController', productDetailCtrl);

    function productDetailCtrl(Product, product, ShoppingCart, $state, $mdDialog){

        var vm = this;

        vm.product = product;
        vm.onCartClick = onCartClick;
        vm.checkout = checkout;

        function onCartClick(prod){
            ShoppingCart.addToOrder(prod);
        }

        function checkout(){
            $mdDialog.hide();
            return $state.go('checkout');
        }
    }
})();
