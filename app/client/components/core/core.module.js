(function() {
    'use strict';

    angular
    	.module('sm.core', [])
    	.constant('FIREBASE_URI', 'https://luminous-inferno-640.firebaseio.com/')
        .run(function ($rootScope, $state) {
            $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
                console.log("hey");
                if (toState.authenticate && !$rootScope.authData){
                    console.log("user is not authenticated");
                    $rootScope.notauth = "Please sign in to access this section";
                    $state.transitionTo("signin");
                    event.preventDefault();
                }
            });
        });

})();