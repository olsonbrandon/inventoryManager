(function(){
    'use strict';
    angular.module('InventoryManager')
    .component('boCard',{
        templateUrl: 'views/card/boCard.html',
        bindings:{
            ptitle: '<',
            subtext: '<',
            image: '<',
            onDetailsClick: '&',
            onCartClick: '&'
        },
        controller: function(){}
    });
})();
