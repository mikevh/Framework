﻿angular.module('app').controller('appController', ['$scope', function($scope) {
    $scope.state = 'authorized';

    $scope.signIn = function() {
        $scope.state = 'authorized'; 
    };
}]);