(function() {
    'use strict';
    angular.module('InventoryManager', ['ui.router','ngStorage'])
    .constant('ServerUrl','http://wta-inventorybackend.herokuapp.com/api/v1');
}());
