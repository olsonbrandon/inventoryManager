(function(){
    'use strict';
    angular.module('InventoryManager')
    .controller('ShoppingCart', cartCtrl);

    function cartCtrl(ShoppingCart, $state, $scope){
        var vm = this;
        vm.showCart = false;
        vm.$onChanges = $onChanges;
        vm.toggleShowCart = toggleShowCart;
        vm.sumSubtotal = sumSubtotal;
        vm.checkoutClicked = checkoutClicked;

        function $onChanges(changes) {
            if (changes.orders) {
                vm.subtotal = sumSubtotal();
            }
        }

        function toggleShowCart(){
            vm.showCart = !vm.showCart;
        }
        function sumSubtotal(){
            var sum = vm.orders.reduce(function(total, curr){
                return total + (curr.product.price * curr.amt);
            },0);
            return sum;
        }
        function checkoutClicked() {
            vm.checkout();
        }
    }
})();
