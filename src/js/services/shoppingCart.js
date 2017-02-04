(function(){
    'use strict';
    angular.module('InventoryManager')
    .factory('ShoppingCart', shoppingCart);

    function shoppingCart(Auth){
        var service = {
            orders: [],
            addToOrder: addToOrder
        };
        return service;

        function addToOrder(product) {
            var newOrders = service.orders.slice();
            var idx = alreadyInCart(product);
            if (idx !== -1) {
                newOrders[idx].amt++;
            } else {
                var newOrder = generateOrderObj(product);
                newOrders.push(newOrder);
                service.orders = newOrders;
            }
            service.orders = newOrders;
        }

        function alreadyInCart(product){
            for(var i = 0; i < service.orders.length; i++){
                if(service.orders[i].productId === product.id){
                    return i;
                }
            }
            return -1;
        }

        function generateOrderObj(product){
            return {
                amt: 1,
                product: product,
                productId: product.id
            };
        }
    }
})();
