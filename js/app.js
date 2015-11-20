//define angular module
var app=angular.module('app',['ui.router','app.factory']); 
    app.config(function ($stateProvider, $urlRouterProvider){

          $urlRouterProvider.otherwise("/");

          $stateProvider
            .state('showAccounts', {
              url: '/showAccounts',
              templateUrl: 'pages/show-accounts/show-accounts.html',
              controller: 'ShowAccountsCtrl'
            })
            .state('home', {
              url: '/',
              templateUrl: 'pages/home/home.html',
              controller: 'HomeCtrl'
            });

        });

app.controller('MainController', function($scope,$state){
  console.log("hello main controller");
	$scope.message="Hello from Main Conroller";

});

// app.factory('RequestFactory', function(){

//     var baseRequestFactory= {
//       userId : '',
//       appToken: 'aouwebug86nTbyupo*4Ftnyt0B'
//     };

//     var createNewBaseRequest=function (additionalRequest){
//       var baseRequest={}
          
//           baseRequest.userId='hello!';
//           baseRequest.appToken='aouwebug86nTbyupo*4Ftnyt0B';

//         var baseRequest = angular.extend(baseRequest, additionalRequest);
//     }

//     return createNewBaseRequest;

// });

