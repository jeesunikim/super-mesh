(function() {
    'use strict';

    angular.module('sm', [

        'ui.router',
        'firebase',

        /*
         * Order is not important.
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */ 
         
        'sm.core',
        'sm.router',
        'ngFileUpload',

        /*
         * Feature areas
         */
         
        'sm.admin',
        'sm.adminCreate',
        'sm.cc',
        'sm.chat',
        'sm.session',
        'sm.signin',
        'sm.signup',
        'sm.event',
        'sm.participant',
        'sm.signin'
    ])

})();