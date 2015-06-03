angular.module('psDashboard').directive('psWidgetBody', ['$compile', '$modal', function ($compile, $modal) {
    return {
        templateUrl: 'ext-modules/dashboard/widgetBodyTemplate.html',
        link: function (scope, el, attrs) {
            var newElement = angular.element(scope.item.template);
            el.append(newElement);
            $compile(newElement)(scope);

            scope.close = function() {
                scope.widgets.splice(scope.widgets.indexOf(scope.item), 1); 
            };

            scope.settings = function() {
                var options = {
                    templateUrl: scope.item.settings.templateUrl,
                    controller: scope.item.settings.controller,
                    scope: scope
                };

                $modal.open(options);
            };

            scope.iconClicked = function() {
                // empty body so clicks don't go to the widget
            };
        }
    };
}]);