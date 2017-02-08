(function(){
    'use strict';
    angular.module('InventoryManager')
    .factory('OrderHistory', orderHistory);

    function orderHistory($http){
        var service = {
            getOrders: getOrders
        };
        return service;

        function getOrders(){
            return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/user/orders');
        }
    }
})();
