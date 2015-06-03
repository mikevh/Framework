angular.module('app').config(['$routeProvider', function($routeProvider) {
    var routes = [
        {
            url: '/dashboard',
            config: {
                template: '<demo-dashboard></demo-dashboard>'
            }
        },
        {
            url: '/locations',
            config: {
                template: '<demo-locations></demo-locations>'
            }
        },
        {
            url: '/guides',
            config: {
                template: '<demo-guides></demo-guides>'
            }
        }
    ];

    routes.forEach(function(route) {
        $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({ redirectTo: '/dashboard' });
}]);