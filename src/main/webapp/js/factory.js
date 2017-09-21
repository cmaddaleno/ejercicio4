/**
 * Module getter
 * @type angular.module.angular-1_3_6_L1749.moduleInstance
 */
var module = angular.module('mpApp.services');


module.factory('instructorInformationService', function instructorInformationService($http) {
    var instructorInformationService = {};

    instructorInformationService.instructorData = function (name, update) {

        var url = "https://api.github.com/users/" + name;

        $http({method: 'GET',
            url: url})
                .then(function success(response) {
                    update(response);
                }, function error(response) {
                    update();
                });



    };
    
    return instructorInformationService;
});
