angular.module('app').factory('groupsAPI', ['$http', function($http) {
    var find = function (id) {
        return $http.get('/api/groups/' + id).then(function (result) {
            return result.data; 
        });
    };

    var all = function() {
        return $http.get('/api/groups').then(function(result) {
            return result.data;
        });
    };

    var insert = function(data) {
        return $http.post('/api/groups', data).then(function(result) {
            return result.data;
        });
    };

    return {
        find: find,
        all: all,
        insert: insert 
    };
}]);