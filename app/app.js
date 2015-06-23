'use strict';

// Declare app level module which depends on views, and components
angular.module('foodieJournal', [
  'ngRoute','foodieJournal.main'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/',{
          templateUrl:'main/partials/_home.html',
          controller: 'HomeController',
      })
      .otherwise({redirectTo: '/'});
}]);
