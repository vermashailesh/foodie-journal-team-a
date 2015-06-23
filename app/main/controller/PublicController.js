'use strict';
var foodieJurnal=angular.module('foodieJournal.public', [
    'ngRoute'
]);
foodieJurnal.controller('PublicController',['$scope','$location',function ($scope,$location){
    if($location.path() =="/"){
        $scope.isFooter=true;
    }else{
        $scope.isFooter=false;
    }
    $scope.checkLogin=function(user){
        user.getCheckLogin=true;
        if(user.getCheckLogin){

        }
    }

}]);