(
    function (){
        angular.module("foodieJournal",[]);
        angular.module("foodieJournal").controller("ChallengeController",ChallengeController);
        function ChallengeController($scope){
            $scope.rebels
                = [{ challenge: 'Challenge Yourselfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
            description1: 'FoodieJournal makes it easy for you to embark',
                description2: ' on a journey to discover new cuisines'
            }
                ];
            console.log($scope.rebels[0].challenge)
            console.log($scope.rebels[0].description1)
            console.log($scope.rebels[0].description2)
        }
    })();