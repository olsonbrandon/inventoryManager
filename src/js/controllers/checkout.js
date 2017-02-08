(function(){
    'use strict';
    angular.module('InventoryManager')
    .controller('CheckoutController', checkoutCtrl);

    function checkoutCtrl(ShoppingCart, Auth){

        var vm = this;

        //BOUND FUNCTION DECLARATIONS
        vm.clearCart = clearCart;
        vm.postOrder = postOrder;
        vm.removeItem = removeItem;

        //BOUND VALUES
        vm.orders = ShoppingCart.orders;

        //BOUND FUNCTION IMPLEMENTATIONS
        function postOrder(){
            if (Auth.user !== null) {
                ShoppingCart.postOrder()
                .then(function(response){
                    console.log(response.data);
                    clearCart();
                });
            }
            else{
                swal("Oops!", "You Forgot to Login!", "error");
            }
        }

        function removeItem(order){
            ShoppingCart.removeItem(order);
        }
        //Helper Functions
        function clearCart(){
            ShoppingCart.orders.length = 0;
        }
    }
})();
