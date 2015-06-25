/**
 * Created by AOWPINS01_01 on 6/23/2015.
 */

'use strict';
var foodieJurnal=angular.module('foodieJournal.culinaris', [
    'ngRoute',
    'ngMap'
]);
foodieJurnal.controller('CulinarisController',['$scope',function ($scope){
    $.support.transition = false;
         $scope.culinaris=[
                             {
                                 "name": "American",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "3 Weeks",
                                 "progress" : 10,
                                 "selectedCls":"x-btn-selected",
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (25).png"
                             },
                             {
                                 "name": "Koriean",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "1 Week",
                                 "progress" : 20,
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (1).png"
                             },
                             {
                                 "name": "Italian",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "1 Week",
                                 "progress" : 20,
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (1).png"
                             },
                             {
                                 "name": "Mexican",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "2 Weeks",
                                 "progress": 70,
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (2).png"
                             },
                             {
                                 "name": "Japanese",
                                 "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
                                 "duration": "3 Weeks",
                                 "progress": 0,
                                 "imagePath":"assets/images/slices/[FoodieChallenge]Asset (3).png"
                             }
         ];
    $scope.culinary=selectedCulinary();
    $scope.map = {
        center: {
            latitude: 37.79,
            longitude: -122.4175
        },
        zoom: 13
    };
    $scope.marker = {
        idKey: 123,
        coords: {
            latitude: 37.7836377,
            longitude: -122.4132168
        }
    };
    function selectedCulinary(){
        return {
            "name": "American",
            "description": "One characterstic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking style",
            "duration": "3 Weeks",
            "progress" : 10,
            "foods":[
                {
                    "id":"check-1",
                    "title":"All-American Bacon Chees Burger",
                    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                },{
                    "id":"check-2",
                    "title":"Treditional Americal Desserts",
                    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                },
                {
                    "id":"check-3",
                    "title":"San Francisco Sourdough Bread",
                    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                },
                {
                    "id":"check-4",
                    "title":"New York Style Buffalo Wings",
                    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                },
                {
                    "id":"check-5",
                    "title":"Smoked Barbecue Ribs",
                    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?"
                }
            ],
            "selectedCls":"x-btn-selected",
            "imagePath":"assets/images/slices/[FoodieChallenge]Asset (25).png"
        }
    }
}])
.directive('circularProgressbar', function() {
        return {

            scope: {
                culinary: '=',
            },
            templateUrl: 'culinaris/partials/circularProgressbar.html'
        };
}).
directive("btstAccordion", function () {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        scope: {},
        template:
            "<div class='accordion' ng-transclude></div>",
        link: function (scope, element, attrs) {

            // give this element a unique id
            var id = element.attr("id");
            if (!id) {
                id = "btst-acc" + scope.$id;
                element.attr("id", id);
            }

            // set data-parent on accordion-toggle elements
            var arr = element.find(".accordion-toggle");
            for (var i = 0; i < arr.length; i++) {
                $(arr[i]).attr("data-parent", "#" + id);
                $(arr[i]).attr("href", "#" + id + "collapse" + i);
            }
            arr = element.find(".accordion-body");
            $(arr[0]).addClass("in"); // expand first pane
            for (var i = 0; i < arr.length; i++) {
                $(arr[i]).attr("id", id + "collapse" + i);
            }
        },
        controller: function () {}
    };
}).
directive('btstPane', function () {
    return {
        require: "^btstAccordion",
        restrict: "E",
        transclude: true,
        replace: true,
        scope: {
            title: "@",
            category: "=",
            order: "="
        },
        template:
            "<div class='accordion-group' >" +
            "  <div class='accordion-heading'>" +
            "    <a class='accordion-toggle' data-toggle='collapse'> {{category.name}} - </a>" +
       
            "  </div>" +
            "<div class='accordion-body collapse'>" +
            "  <div class='accordion-inner' ng-transclude></div>" +
            "  </div>" +
            "</div>",
        link: function (scope, element, attrs) {
            scope.$watch("title", function () {
                // NOTE: this requires jQuery (jQLite won't do html)
                var hdr = element.find(".accordion-toggle");
                hdr.html(scope.title);
            });
        }
    };
});