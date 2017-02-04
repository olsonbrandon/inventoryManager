(function() {
    'use strict';
    angular.module('InventoryManager', ['ui.router','ngStorage','ngMaterial'])
    .constant('ServerUrl','http://wta-inventorybackend.herokuapp.com/api/v1');
}());
