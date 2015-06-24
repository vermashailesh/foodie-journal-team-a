/**
 * Created by AOWPINS01_01 on 6/23/2015.
 */

'use strict';
var foodieJurnal=angular.module('foodieJournal.main', [
    'ngRoute'
]);
foodieJurnal.controller('HomeController',['$scope',function ($scope){
    $scope.title = 'Home Page title';
    $scope.isFooter=true;
}]);
foodieJurnal.controller('FooterController',['$scope','$location',function ($scope,$location){
    if($location.path() =="/"){
        $scope.isFooter=true;
    }else{
        $scope.isFooter=false;
    }

}]);
