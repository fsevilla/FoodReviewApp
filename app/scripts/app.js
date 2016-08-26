'use strict';

/**
 * @ngdoc overview
 * @name myFoodApp
 * @description
 * # myFoodApp
 *
 * Main module of the application.
 */
angular
  .module('myFoodApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'lbServices',
    'ui.bootstrap',
    'toastr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/saucers/:id', {
        templateUrl: 'views/saucers.html',
        controller: 'SaucersCtrl'
      })
      .when('/saucers/:id/comments/:saucerId', {
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
