'use strict';

// Declare app level module which depends on views, and components
angular.module('foodieJournal', [
  'ngRoute',
  'foodieJournal.main',
  'foodieJournal.home',
  'foodieJournal.public',
  'foodieJournal.culinaris',
  'foodieJournal.journey'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/',{
          templateUrl:'main/partials/_home.html',
          controller: 'HomeController'
      })
      .when('/welcomehome',{
          templateUrl: 'home/view/home.html',
          controller: 'WelcomeHomeController'
      })
      .when('/culinaris',{
          templateUrl:'culinaris/partials/_culinaryJourney.html',
          controller: 'CulinarisController'
      })
      .when('/journey',{
          templateUrl: 'journey/view/Journey.html',
          controller: 'JourneyController'
      })
      .otherwise({redirectTo: '/'});
}]);
