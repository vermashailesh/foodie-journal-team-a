/**
 * Created by AOWPINS01_01 on 6/24/2015.
 */

/**
 * Created by AOWPINS01_01 on 6/23/2015.
 */




angular
    .module('foodieJournal.journey', ['ngMap'])
    .controller('JourneyController',['$scope',function ($scope){
    $scope.journey = 'Journeys';
    $scope.cuisine = 'American';
    $scope.instruction = 'Instructions: Go ahead and ask for the ultimate Caramel Pie';
        $scope.description = 'Vegan Pitchfork banjo, cold presses post-ironic XOXO church-key. Salvia singh-origin coffee ' +
            '3 wolf moon typewriter you probably haven\'t heard of them freegan. Pitchfork cardian 8-bit four loko banh ' +
            'mi Bansky. Pork belly meggings food truck keytar polaroid mustache farm to table';
}]);