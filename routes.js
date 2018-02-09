
angular.module('app').config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('question', {
        url: '/question',
        templateUrl: './question.html',
        controller: 'questionCtrl'
    })
    $urlRouterProvider.otherwise('/')
})