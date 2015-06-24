'use strict';
var foodieJurnal=angular.module('foodieJournal.public', [
    'ngRoute'
]);
foodieJurnal.controller('PublicController',['$scope','$location',function ($scope,$location){
    if($location.path() =="/" || $location.path() == ""){
        $scope.isFooter=true;
    }else{
        $scope.isFooter=false;
		var user={
		    isLogin:true,
			userName:"John",
			profileImage:"assets/images/slices/profileimage.png"
		};
	       $scope.user=user;   
    }
}]);