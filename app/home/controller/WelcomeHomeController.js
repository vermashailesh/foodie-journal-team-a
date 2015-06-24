/**
 * Created by AOWPINS01_01 on 6/23/2015.
 */


angular
    .module('foodieJournal.home', [])
    .controller('WelcomeHomeController',['$scope','activityService',function ($scope,activityService){

        $scope.title = 'Welcome! Choose a track to get started.';

        activityService.getActivities().then(function(data) {
            debugger;
            $scope.activities = data
        });
    }])
    .factory('activityService',activityFactory)
    .directive('activityDetails', function() {
        return {
            scope: {
                activity: '='
            },
            restrict: 'CAE', // default behaviour
            templateUrl: 'home/view/activityTemplate.html'
        };
    });

function activityFactory($http){
    this.$inject = ['$http'];

    return {
        getActivities: getActivities
    };

    function getActivities () {
        debugger;
        return $http
            .get('data/activity.json')
            .then(complete)
            .catch(failed);
    }

    function complete(response) {
        debugger;
        return response.data;
    }

    function failed(error) {
        return error.statusText;
    }
}


