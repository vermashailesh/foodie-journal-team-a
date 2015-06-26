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
    $scope.rebels
        = [{ challenge: 'Challenge Yourself',
        description1: 'FoodieJournal makes it easy for you to embark',
        description2: ' on a journey to discover new cuisines',
        imageUrl1: '../images_VY/picjumbo.com_IMG_0895.jpg',
        imageUrl2: 'main/images_VY/FoodieChallengeAsset.png',
        imageDescription1: 'Explore the top 5',
        imageDescription2: 'international cuisines and',
        imageDescription3: 'follow cuisine journeys',
        imageUrl3: 'main/images_VY/FoodieChallengeAsset1.png',
        imageDescription4: 'Receive restaurant',
        imageDescription5: 'reccomendations based on your',
        imageDescription6: 'preference and location',
        imageUrl4: 'main/images_VY/FoodieChallengeAsset3.png',
        imageDescription7: 'Complete Challenges and',
        imageDescription8: 'track your progress against',
        imageDescription9: 'your selected cuisine journey',

    }
    ];

    console.log($scope.rebels[0].footerImageUrl1);
    console.log($scope.rebels[0].imageDescription8);
}]);
foodieJurnal.controller('FooterController',['$scope','$location',function ($scope,$location){
    if($location.path() =="/"){
        $scope.isFooter=true;
    }else{
        $scope.isFooter=false;
    }
    $scope.footer
        = [{
        footerDescription1: 'Developed By',
        footerImageUrl1: '../app/assets/images/%5BFoodieChallenge%5DAsset%20(19).png',
        footerImageUrl2: '../app/assets/images/%5BFoodieChallenge%5DAsset%20(20).png'
    }
    ];
}]);
