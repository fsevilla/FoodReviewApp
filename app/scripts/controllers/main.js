'use strict';

/**
 * @ngdoc function
 * @name myFoodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myFoodApp
 */
angular.module('myFoodApp')
  .controller('MainCtrl', function ($scope, Restaurant) {
        $scope.restaurants = Restaurant.find();
  });
