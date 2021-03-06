(function() {
    'use strict';
    angular.module('InventoryManager')
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider
        .otherwise('/products');

        $stateProvider
        .state({
            name: 'products',
            url: '/products',
            templateUrl: '/views/products.html',
            controller: 'ProductsController as pc',
            resolve : {
              products : function(Product){
                return Product.getProducts().then(function(result){
                  return result.data;
                });
              }
            }
        })
        .state({
            name: 'signup',
            url: '/signup',
            templateUrl: '/views/signup.html',
            controller: 'SignupController as sign',
            resolve: {
                isLoggedIn: function(Auth, $state, $timeout){
                    if(Auth.user){
                        $timeout(function(){
                            $state.go('products');
                        },10);
                    }
                }
            }
        })
        .state({
            name: 'login',
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginController as log',
            resolve: {
                isLoggedIn: function(Auth, $state, $timeout){
                    if(Auth.user){
                        $timeout(function(){
                            $state.go('products');
                        },10);
                    }
                }
            }
        })
        .state({
            name: 'checkout',
            url: '/checkout',
            templateUrl: 'views/checkout.html',
            controller: 'CheckoutController as checkout'
        })
        .state({
            name: 'orderHistory',
            url: '/orderHistory',
            templateUrl: 'views/orderHistory.html',
            controller: 'OrderHistoryController as history',
            resolve: {
                orders: function(Transactions){
                    return Transactions.getOrders().then(function(response){
                        return response.data;
                    });
                }
            }
        })
        .state({
            name: 'transactionDetails',
            url: '/transactionDetails/:transId',
            templateUrl: 'views/transactionDetails.html',
            controller: 'TransactionDetailController as trans',
            resolve: {
                transId: function($stateParams){
                    return $stateParams.transId;
                },
                transaction: function($stateParams, Transactions){
                    return Transactions.getTransaction($stateParams.transId).then(function(response){
                        return response.data;
                    });
                }
            }
        });
    });
}());
