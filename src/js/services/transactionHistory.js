(function(){
    'use strict';
    angular.module('InventoryManager')
    .factory('Transactions', transactions);

    function transactions($http){
        var service = {
            getOrders: getOrders,
            getTransaction: getTransaction
        };
        return service;

        function getOrders(){
            return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/user/orders');
        }
        function getTransaction(id){
            return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/transaction/' + id);
        }
    }
})();
