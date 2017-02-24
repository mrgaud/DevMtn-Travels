angular.module('devmtnTravel').controller('mainCtrl', function($scope, $stateParams, mainSrv) {
    $scope.getIndex = function(param){
        $scope.location = mainSrv.travelInfo[param]
    }

    $scope.travelInfo = mainSrv.travelInfo

})
