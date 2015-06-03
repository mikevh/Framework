angular.module('psMenu').directive('psMenuItem', function() {
    return {
        require: '^psMenu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'ext-modules/menu/menuItemTemplate.html',
        link: function(scope, el, attr, ctrl) {
            scope.isActive = function () {
                
                var x = ctrl.getActiveItem();
                var rv = x === el;
                return rv;
            };

            scope.isVertical = function() {
                return ctrl.isVertical() || el.parents('.ps-subitem-section').length > 0;
            };

            el.on('click', function(evt) {
                evt.stopPropagation();
                evt.preventDefault();

                scope.$apply(function() {
                    ctrl.setActiveItem(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});
