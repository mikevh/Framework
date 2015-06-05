angular.module('app').directive('group', ['$log', '$rootScope', 'groupsAPI', function ($log, $rootScope, groupsAPI) {
    return {
        templateUrl: 'app/widgets/group/groupTemplate.html',
        link: function (scope, el, attrs) {
            scope.isLoaded = false;
            scope.hasError = false;
            scope.loadGroup = function (id) {
                scope.isLoaded = false;
                scope.hasError = false;
                groupsAPI.find(id).then(function (data) {
                    scope.isLoaded = true;
                    scope.group = data;
                }, function (error) {
                    $log.error(error);
                    scope.hasError = true;
                });
            };

            scope.loadGroup(scope.item.settings.id);
        }
    };
}]);