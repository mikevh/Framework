angular.module('app').factory('groupsAPI', ['$http', function($http) {
    var find = function (id) {
        return $http.get('/api/groups/' + id).then(function (result) {
            return result.data; 
        });
    };

    return {
        find: find
    };
}]);