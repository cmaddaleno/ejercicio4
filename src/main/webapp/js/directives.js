var module = angular.module('mpApp.directives', []);


module.directive('mpDirective', function() {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment
        templateUrl: 'view/commits.html',
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('Nombre: ' + $scope.item.name );
            });
        }
    };
});

