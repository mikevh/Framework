angular.module('app').directive('groups', ['$log', '$rootScope', 'groupsAPI', function ($log, $rootScope, groupsAPI) {
    return {
        templateUrl: 'app/widgets/groups/groupsTemplate.html',
        link: function (scope, el, attrs) {
            scope.isLoaded = false;
            scope.hasError = false;
            scope.groups = [];
            scope.n = {};

            scope.groupClicked = function(group) {
                $rootScope.$broadcast('group-selected', { id: group.id });
            };

            scope.add = function(n) {
                groupsAPI.insert({ name: n.name, leader: n.leader }).then(function (data) {
                    scope.groups.push(data);
                }, function(e) { debugger; });
            };

            scope.loadGroups = function () {
                scope.isLoaded = false;
                scope.hasError = false; 
                groupsAPI.all().then(function(data) {
                    scope.isLoaded = true;
                    scope.groups = data;
                }, function (error) {
                    $log.error(error);
                    scope.hasError = true;
                });
            };

            scope.loadGroups();
        }
    };
}]);