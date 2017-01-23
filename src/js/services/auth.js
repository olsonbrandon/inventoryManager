(function(){
    'use strict';
    angular.module('InventoryManager')
    .factory('Auth',auth);

    function auth($http,ServerUrl,$localStorage){
        var service = {
            signup: signup,
            login: login,
            user: null,
            loggedIn: false,
            logout: logout
        };
        init();
        return service;
        function init(){
            if ($localStorage.token) {
                service.user = getClaimsFromToken();
                service.loggedIn = true;
            }
        }
        function signup(creds){
            return $http.post(ServerUrl + '/signup',creds).then(function(response){
                successAuth(response.data);
            }, function(err){
            });
        }
        function login(creds){
            return $http.post(ServerUrl + '/login',creds).then(function(response){
                successAuth(response.data);
            }, function (err){
            });
        }
        function urlBase64Decode(str) {
           var output = str.replace('-', '+').replace('_', '/');
           switch (output.length % 4) {
               case 0:
                   break;
               case 2:
                   output += '==';
                   break;
               case 3:
                   output += '=';
                   break;
               default:
                   throw 'Illegal base64url string!';
           }
           return window.atob(output);
       }
//get usable information from token (like user’s name and id)
       function getClaimsFromToken() {
           var token = $localStorage.token;
           var user = {};
           if (typeof token !== 'undefined') {
               var encoded = token.split('.')[1];
               user = JSON.parse(urlBase64Decode(encoded));
           }
           return user;
       }

       function logout(){
           delete $localStorage.token;
           service.loggedIn = false;
           service.user = null;
       }
//on successfully authenticating user, save the token
        function successAuth(res) {
            console.log('success - auth');
            $localStorage.token = res.token;
            var tokenClaims = getClaimsFromToken();
            service.user = tokenClaims;
            service.loggedIn = true;
        }
    }
})();
