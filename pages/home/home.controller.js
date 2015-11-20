(function(){
	'use strict';

	angular.module('app')
		.controller('HomeCtrl',function ($scope,$state,GetAccountsFactory)
			{
				$scope.message="Hello from Main Conroller";

				$scope.showAccounts= function(){
				  console.log("Button cliecked");
				  $state.go('showAccounts');
				};

			});

})();
	