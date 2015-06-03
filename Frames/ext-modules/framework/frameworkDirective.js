angular.module('psFramework').directive('psFramework', function() {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: 'frameworkController',
        templateUrl: 'ext-modules/framework/frameworkTemplate.html'
    };
});
