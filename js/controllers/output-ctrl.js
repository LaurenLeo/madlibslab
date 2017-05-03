var app = angular.module('madMod');
//output controller has access to madFactory
app.controller('outputController', function($scope, madFactory){

  $scope.print = madFactory.returnInputs();
  console.log($scope.print);


});
