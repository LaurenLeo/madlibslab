var app = angular.module('madMod');

app.factory('madFactory', function(){
        var inputs = {};
        function setInputs(words){
          inputs = words;
          console.log(inputs);
        };
        function returnInputs() {
          return inputs
        }
          return{
            returnInputs: returnInputs,
            setInputs: setInputs
          }

})
