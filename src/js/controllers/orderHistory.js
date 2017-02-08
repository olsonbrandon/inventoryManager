(function(){
    'use strict';
    angular.module('InventoryManager')
    .controller('OrderHistoryController', orderHistoryCtrl);

    function orderHistoryCtrl(OrderHistory){
        var vm = this;

        vm.getOrders = getOrders;
        vm.getOrders();

        function getOrders(){
            OrderHistory.getOrders()
            .then(function(response){
                vm.orderedItems = response.data;
                console.log(vm.orderedItems);
            });
        }
    }
})();
