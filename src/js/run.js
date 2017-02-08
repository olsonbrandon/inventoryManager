(function(){
    'use strict';
    angular.module('InventoryManager')
    .run(function($rootScope){
        $rootScope.$on('$stateChangeSuccess', function(event, current) {
            $rootScope.currentLink = current;
        });
    });
})();
