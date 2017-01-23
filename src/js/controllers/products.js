(function() {
    'use strict';
    angular.module('InventoryManager')
    .controller('ProductsController', productsCtrl);

    function productsCtrl(Product, products, $state){
        var vm = this;

        vm.products = products;

        vm.onBuyClick = function(id){
            console.log('onBuyClick: ',id);

        };

        vm.onDetailsClick = function(id){
            console.log('onDetailsClick: ',id);
            $state.go('product-detail',{productId: id})
        };

    }
})();
