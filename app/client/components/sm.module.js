(function() {
    'use strict';

    angular.module('sm', [

        /*
         * 3rd party libraries
         */

        'ui.router',
        
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * its components are available.
         */

         'ui.router',

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */ 

        'sm.core',

        /*
         * Feature areas
         */
         
        'sm.chat',
        'sm.map',
        'sm.session'
    ]);

})();