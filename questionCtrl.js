                                                           //50C     //49G
angular.module('app').controller('questionCtrl', function($scope, questionSrvc){
    questionSrvc.getQuestions().then( questions => {
        console.log(questions)
        $scope.questions = questions.data;
    })
    $scope.test = 'connected'
})