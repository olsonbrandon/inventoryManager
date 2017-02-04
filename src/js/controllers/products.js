(function() {
    'use strict';
    angular.module('InventoryManager')
    .controller('ProductsController', productsCtrl);

    function productsCtrl(Product, products, $state, $mdDialog, ShoppingCart){
        var vm = this;

        vm.products = products;

        vm.onCartClick = function(prod){
            console.log('prod',prod);
            ShoppingCart.addToOrder(prod);
        };

        vm.cancel = function() {
            $mdDialog.cancel();
        };

        vm.onDetailsClick = function(id){

           $mdDialog.show({
              clickOutsideToClose: true,
              preserveScope: true,
              templateUrl: 'views/productDetails.html',
              controller: 'ProductDetailsController as pdc',
              resolve: {
                  product: function(){
                      return Product.getProductDetails(id).then(function(result){
                          return result.data[0];
                      });
                  }
              }
           });
        };
    }
})();
