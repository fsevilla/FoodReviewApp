'use strict';

/**
 * @ngdoc function
 * @name myFoodApp.controller:CommentsCtrl
 * @description
 * # CommentsCtrl
 * Controller of the myFoodApp
 */
angular.module('myFoodApp')
  .controller('CommentsCtrl', function ($scope, $routeParams, $uibModal, Restaurant, Saucer, Comment, toastr) {

        var restaurantId = $routeParams.id,
            saucerId = $routeParams.saucerId;

        $scope.restaurant = Restaurant.findOne({
            filter: { where: {id: restaurantId} }
        });

        $scope.saucer = Saucer.findOne({
            filter: { where: {id: saucerId} }
        });


        $scope.getComments = function getComments () {
            Comment.find({
                filter: { where: { saucerId: saucerId }}
            }, function onSuccess (list) {
                $scope.comments = list;
            });
        };

        $scope.openCreateCommentModal = function openCreateCommentModal () {
            var modalInstance = $uibModal.open({
                animation: true,
                  templateUrl: 'views/createCommentModal.html',
                  controller: 'CreateCommentCtrl',
                  resolve: {
                      saucer: $scope.saucer
                  }
            });
        }

        $scope.$on('commentSaved', function () {
            $scope.getComments();
            toastr.success('Your comment was saved successfully!');
        });

        $scope.getComments();
  });
