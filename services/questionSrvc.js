        //49D                   //49E
angular.module('app').service('questionSrvc', function($http){

    //49C
    //46E
    this.getQuestions = function(){
                //52D
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/')
    }
})