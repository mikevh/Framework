angular.module('psDashboard').directive('psDashboard', [function() {
    return {
        templateUrl: 'ext-modules/dashboard/dashboardTemplate.html',
        link: function(scope, el, attrs) {
            scope.addNewWidget = function(widget) {
                var newWidget = angular.copy(widget.settings);
                scope.widgets.push(newWidget);
            }
        }
    };
}]);