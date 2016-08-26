'use strict';

/**
 * @ngdoc function
 * @name myFoodApp.controller:SaucersCtrl
 * @description
 * # SaucersCtrl
 * Controller of the myFoodApp
 */
angular.module('myFoodApp')
  .controller('SaucersCtrl', function ($scope, $routeParams, Restaurant, Saucer) {
        var restaurantId = $routeParams.id;
        
        $scope.restaurant = Restaurant.findOne({
            filter: { where: {id: restaurantId} }
        });

        Saucer.find({
            filter: { where: { restaurantId: restaurantId}}
        }, function onSuccess (list) {
            $scope.saucers = list;
        });
  });
