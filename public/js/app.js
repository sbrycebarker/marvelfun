angular.module("myApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
          $stateProvider
          .state('home', {
            url: '/',
            templateUrl: "../views/main.html",
            controller: 'mainCtrl'
          })
          .state('view1', {
            url: '/view1/:vehicle',
            templateUrl: "../views/view1.html",
            controller: 'mainCtrl'
          })
          .state('view2', {
            url: '/view2',
            templateUrl: "../views/view2.html",
            controller: 'mainCtrl'
          })

})
