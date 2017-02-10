(function(){
    'use strict';
    angular.module('InventoryManager')
    .controller('TransactionDetailController', transactionDetailCtrl);

    function transactionDetailCtrl(transId, transaction){
        var vm = this;

        vm.transaction = transaction;

    }
})();
