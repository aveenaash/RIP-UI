angular.module('app.factory',[])
	.factory('GetAccountsFactory', function($http, $q){
      return {
        getAccountsResponse : function(getAccountsRequest)
        {
          console.log("Inside GetAccountsFactory getAccountsResponse ");
           return $http({
                        method: 'POST',
                        url:    'http://localhost:8080/PahiloMaya/api/accounts/list',
                        data: getAccountsRequest
                })
                .success(function (response){
                      if (response.success) {
                        console.log("Respone  ====> "+JSON.stringify(response));
                        return response;
                      } else {
                            console.error("Response was unsuccessful: " + JSON.stringify(response));
                            return $q.reject(response);
                        }
                })
                .error(function(response, status, headers, statusText){
                    console.error("GetAccountsFactory failed with response: " + response + " & status code: " + status + ".");
                    return $q.reject(response);
                });
        }
      };
	});