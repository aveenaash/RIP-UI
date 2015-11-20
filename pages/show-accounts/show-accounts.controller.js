(function(){
	'use strict';

	angular.module('app')
		.controller('ShowAccountsCtrl',function ($scope,GetAccountsFactory,AccountService)
			{
				$scope.message="Hello from ShowAccountsCtrl";

				$scope.accounts={};

				var getAccounts= function()
				{
					var accountsRequest=AccountService.createAccountRequest();
					GetAccountsFactory.getAccountsResponse(accountsRequest)
							.then(function(response){
								$scope.accounts=response.data.accounts;
								console.log("accountsReSPONSE ==> "+JSON.stringify($scope.accounts));
							}, function(error){
								console.log("error====> "+JSON.stringify(error))
							});
				}

				$scope.getAccountDetails=function(acc)
				{
					console.log("Account Number ::: "+acc.accountNumber);
				}
				
				getAccounts();



			});
			
})();
	