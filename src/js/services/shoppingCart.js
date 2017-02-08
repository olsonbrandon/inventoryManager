(function(){
    'use strict';
    angular.module('InventoryManager')
    .factory('ShoppingCart', shoppingCart);

    function shoppingCart(Auth, $http, $filter){
        var service = {
            orders: [],
            addToOrder: addToOrder,
            postOrder: postOrder,
            removeItem: removeItem
        };
        return service;

        function removeItem(order){
            var index = service.orders.indexOf(order);
            service.orders.splice(index, 1);
        }

        function addToOrder(product) {
            var newOrders = service.orders.slice();
            var idx = alreadyInCart(product);
            if (idx !== -1) {
                newOrders[idx].amt++;
            }
            else {
                var newOrder = generateItemObj(product);
                newOrders.push(newOrder);
                service.orders = newOrders;
            }
            service.orders = newOrders;
            console.log(service.orders);
        }

        function alreadyInCart(product){
            for(var i = 0; i < service.orders.length; i++){
                if(service.orders[i].id === product.id){
                    return i;
                }
            }
            return -1;
        }

        function generateItemObj(product){
            var itemObj = {
                amt: 1,
                product: product,
                id: product.id
            };
            console.log(itemObj);
            return itemObj;
        }

        function generateOrderObj(){
            var orderObj = {
                type: {
                    id: 1,
                    description: 'Sale'
                },
                date: $filter('date')(new Date(), 'yyyy-mm-dd'),
                subTransactions: service.orders.map(function(el){
                    el.qty = el.amt;
                    return el;
                })
            };
            return orderObj;
        }


        function postOrder(){
            return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1/transaction',generateOrderObj());
        }
    }
})();
