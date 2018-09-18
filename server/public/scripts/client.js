const speechApp = angular.module('SpeechApp',[]);

speechApp.controller('SpeechController',['$http', function($http){
const self = this;
self.message=('Angular sure is sharp.')
}]);