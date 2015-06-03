angular.module('psMenu').directive('psMenu', ['$timeout', function($timeout) {
    return {
        scope: {
            
        },
        transclude: true,
        templateUrl: 'ext-modules/menu/menuTemplate.html',
        controller: 'menuController',
        link: function(scope, el, attr) {
            var item = el.find('.ps-selectable-item:first');
            $timeout(function() {
                item.trigger('click');
            });
        }
    };
}]);
