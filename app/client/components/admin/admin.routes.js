(function(){

	angular
		.module('sm.admin')
		.run(appRun);

		function appRun(routerHelper){
			routerHelper.configureStates(getStates());
		};

		function getStates(){
			return [
				{
					state: 'ideas',
					config: {
						url: '/ideas',
						controller: 'AdminController',
						templateUrl: 'client/components/admin/admin.html',
						authenticate: true
					}
				}
			]
		}

})();