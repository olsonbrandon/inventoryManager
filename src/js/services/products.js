(function(){
    'use strict';
    angular.module('InventoryManager')
    .factory('Product', product);

    function product($http){
      var service = {
        getProducts: getProducts,
        getProductDetails: getProductDetails
      };
      return service;

      function getProducts(){
        return $http.get('https://wta-inventorybackend.herokuapp.com/api/v1/product');
      }
      function getProductDetails(id){
          return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/' + id);
      }
    }
})();
