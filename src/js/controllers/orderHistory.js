(function(){
    'use strict';
    angular.module('InventoryManager')
    .controller('OrderHistoryController', orderHistoryCtrl);

    function orderHistoryCtrl(Transactions, $state, orders){
        var vm = this;

        vm.orders = orders;
        vm.goToDetails = goToDetails;

        function goToDetails(id){
            $state.go('transactionDetails', {
                transId: id
            });
        }
    }
})();
