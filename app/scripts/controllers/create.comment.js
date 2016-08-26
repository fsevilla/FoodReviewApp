'use strict';

/**
 * @ngdoc function
 * @name myFoodApp.controller:CreateCommentCtrl
 * @description
 * # CreateCommentCtrl
 * Controller of the myFoodApp
 */
angular.module('myFoodApp')
  .controller('CreateCommentCtrl', function ($scope, $rootScope, $uibModalInstance, saucer, Comment) {

        $scope.data = {
          saucerId: saucer.id
        };

        $scope.saveComment = function saveComment () {
            console.log('Data to be saved: ', $scope.data);
            Comment.create( $scope.data , function onSuccess () {
                $uibModalInstance.dismiss('saved');
                $rootScope.$broadcast('commentSaved', $scope.data);
            });
        };
  });
