(function() {
    angular.module('InventoryManager')
    .controller('SignupController', signupCtrl);

    function signupCtrl(Auth){
        var vm = this;

        vm.signup = signup;

        vm.creds = {
            email: null,
            password: null,
            fName: null,
            lName: null
        };


        function signup(creds){
            Auth.signup(creds);
            vm.creds={};
        }
    }
}());
