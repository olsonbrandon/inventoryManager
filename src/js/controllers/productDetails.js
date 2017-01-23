(function(){
    'use strict';
    angular.module('InventoryManager')
    .controller('ProductDetailsController', productDetailCtrl);

    function productDetailCtrl(Product,product){

        var vm = this;

        vm.product = product;

    }

})();
