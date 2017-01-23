(function(){
    'use strict';
    angular.module('InventoryManager')
    .component('boCard',{
        templateUrl: 'views/card/boCard.html',
        bindings:{
            title: '<',
            subtext: '<',
            image: '<',
            onDetailsClick: '&',
            onBuyClick: '&'
        },
        controller: function(){}
    });
})();
