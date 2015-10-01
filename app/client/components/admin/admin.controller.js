(function(){

	angular
		.module('sm.admin')
		.controller('AdminController', AdminController);

		AdminController.$inject = ['$scope','$rootScope','AdminFactory', '$firebaseObject','$firebaseArray','FIREBASE_URI'];

		function AdminController($scope ,$rootScope, AdminFactory, $firebaseObject, $firebaseArray, FIREBASE_URI){
			var eventRef = new Firebase(FIREBASE_URI + 'Session');

            //instatiate session object and add to $scope
            $scope.session = {
                name:"",
                presenter:"",
                desc:"",
                time:"",
                imgUrl:""
            };


			$scope.sessions = $firebaseArray(eventRef);

            //var list = $firebaseArray(ref);
            //list.$add({ foo: "bar" }).then(function(ref) {
            //    var id = ref.key();
            //    console.log("added record with id " + id);
            //    list.$indexFor(id); // returns location in the array
            //});

            $scope.submitSession = function(session){

                console.log(session, "SESSION SUBMITTED TO FIREBASE")
				$scope.sessions.$add(session);
                $scope.session ={};
                $scope.upload ="";
			};

            //watch file for change, do stuff and trigger factory Func.
			$scope.$watch('file', function(file){
				if(file){
					$scope.loading = true;

					AdminFactory.uploadImg($scope.file).then(function(data){
						$scope.loading = false;
                        console.log(data, "data");
						$scope.upload = data;

                        //get path on callback from AWS
						var initial_path ="https://s3-us-west-2.amazonaws.com/supermesh/";
                        //this is necessary because of the way AWS formats spaces "+"
						$scope.session.imgUrl = initial_path + data.data.split(' ').join('+');

					});
				}
			})

		}

})();