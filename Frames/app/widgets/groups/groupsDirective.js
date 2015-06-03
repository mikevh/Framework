angular.module('app').directive('group', ['$log', 'groupsAPI', function ($log, groupsAPI) {
    return {
        templateUrl: 'app/widgets/groups/groupsTemplate.html',
        link: function (scope, el, attrs) {
            scope.isLoaded = false;
            scope.hasError = false;
            scope.groups = [];

            scope.loadGroup = function (id) {
                scope.isLoaded = false;
                scope.hasError = false;
                groupsAPI.find(id).then(function(data) {
                    scope.isLoaded = true;
                    scope.groups.push(data);
                }, function (error) {
                    $log.error(error);
                    scope.hasError = true;
                });
            };

            scope.loadGroup(1);
        }
    };
}]);