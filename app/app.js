'use strict';

// Declare app level module which depends on views, and components
angular.module('foodieJournal', [
  'ngRoute',
  'foodieJournal.main',
  'foodieJournal.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/',{
          templateUrl:'main/partials/_home.html',
          controller: 'HomeController'
      })
      .when('/home',{
          templateUrl: 'home/view/home.html',
          controller: 'WelcomeHomeController'
      })
      .otherwise({redirectTo: '/'});
}]);
