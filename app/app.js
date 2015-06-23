'use strict';

// Declare app level module which depends on views, and components
angular.module('foodieJournal', [
  'ngRoute','foodieJournal.main','foodieJournal.public','foodieJournal.culinaris'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/',{
          templateUrl:'main/partials/_home.html',
          controller: 'HomeController',
      })
      .when('/culinaris',{
          templateUrl:'culinaris/partials/_culinaryJourney.html',
          controller: 'CulinarisController',
      })
      .otherwise({redirectTo: '/'});
}]);
