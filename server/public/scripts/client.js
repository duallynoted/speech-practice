const speechApp = angular.module('SpeechApp',[]);

speechApp.controller('SpeechController',['$http', function($http){
const self = this;
self.nameToSend = {}

self.message=('Angular sure is sharp');
self.getName = function () {
    $http({
        method: 'GET',
        url: '/speeches'
    }).then(function (response) {
        self.speechesArray = response.data;
    }).catch(function (error) {
        alert('Unable to GET from Server', error);
        console.log('Error', error);
    })//end GET call
};//end getName
self.addStudent = function(){
        $http({
            method: 'POST',
            url: '/speeches',
            data: self.nameToSend
        }).then(function (response) {
            console.log('Back from Server with POST', response);
            self.nameToSend = {}
            self.getName();
        }).catch(function (error) {
            alert('Unable to add student', error);
            console.log('Error', error);
        });//end POST call
}
getName();
}]);