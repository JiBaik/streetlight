angular.module('myApp.addEvent', [])
  .controller('AddEventCtrl', function(Selected, MyAppFactory, $scope, DataFactory) {
    var ec = this;
    ec.addNewEvent = function(){
      ec.newEvent.time = [ec.startTime, ec.endTime];
      MyAppFactory.getCoordinates(ec.newEvent.address).then(function(result){
        ec.newEvent.location = result;
        console.log('event: ', ec.newEvent);
        Selected.events.push(ec.newEvent);
        console.log('Selected: ', Selected);
        console.log('Selected: ', DataFactory);
        $scope.$close();
      })

    };
    var _init = function() {
      ec.newEvent = {};
    };
    _init();
  });