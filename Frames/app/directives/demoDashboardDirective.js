angular.module('app').directive('demoDashboard', ['$localStorage', '$rootScope', function ($localStorage, $rootScope) {
    return {
        scope: {

        },
        template: '<ps-dashboard></ps-dashboard>',
        link: function (scope) {

            $rootScope.$on('group-selected', function (evt, data) {
                // TODO: get group template in a better way
                var newWidget = angular.copy(scope.subWidgetDefinitions[0].settings);
                newWidget.settings.id = data.id;
                scope.widgets.push(newWidget);
            });

            scope.title = 'dash dot dash';

            scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargins: false,
                pushing: true,
                floating: true,
                swapping: false
            };

            scope.subWidgetDefinitions = [
                {
                    title: 'Group',
                    settings: {
                        sizeX: 3,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<group></group>',
                        settings: {

                        }
                    },
                    menu: false,
                }
            ];

            scope.widgetDefinitions = [
                {
                    title: 'Groups',
                    settings: {
                        sizeX: 3,
                        sizeY: 4,
                        minSizeX: 3,
                        minSizeY: 4,
                        template: '<groups></groups>',
                        settings: {
                            
                        }
                    }
                },
                {
                    title: 'Temperature',
                    settings: {
                        sizeX: 3,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<demo-temperature></demo-temperature>',
                        settings: {
                            id: 1000,
                            templateUrl: 'app/dialogs/demoSelectLocationTemplate.html',
                            controller: 'demoSelectLocationController'
                        }
                    }
                },
                {
                    title: 'Employee',
                    settings: {
                        sizeX: 3,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<demo-employee></demo-employee>',
                        settings: {
                            id: 5000,
                            templateUrl: 'app/dialogs/demoSelectEmployeeTemplate.html',
                            controller: 'demoSelectEmployeeController'
                        }
                    }
                },
                {
                    title: 'Inventory',
                    settings: {
                        sizeX: 5,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<demo-inventory></demo-inventory>',
                        settings: {
                            id: 1002,
                            templateUrl: 'app/dialogs/demoSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'
                        }
                    }
                },
            ];

            scope.widgets = $localStorage.widgets || [

            ];

            scope.$watch('widgets', function() {
                $localStorage.widgets = scope.widgets;
            }, true);
        }
    };
}]);