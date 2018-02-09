                                        //53E           //53F
angular.module('app').config(function($stateProvider, $urlRouterProvider){
                    //53G
    $stateProvider.state('question', {
        url: '/question',
        templateUrl: './question.html',
        controller: 'questionCtrlgit'
    })
    $urlRouterProvider.otherwise('/')
})