/**
 * Module getter
 * @type angular.module.angular-1_3_6_L1749.moduleInstance
 */
var module = angular.module('mpApp.services');


module.factory('instructorInformationService', function instructorInformationService($http) {
    var instructorInformationService = {};

    function datos(name) {

        var dev = {
            nickname: '',
            nombre: '',
            pais: '',
            homepage: '',
            gravatar: ''
        };


        var url = "https://api.github.com/users/" + name;

        $http({method: 'GET',
            url: url})
                .then(function success(response) {

                    dev.nickname = response.data.login;
                    dev.nombre = response.data.name;
                    return dev;


                }, function error(response) {
                    return null;
                });



    }

    instructorInformationService.instructorData = function (name) {
        return datos(name);
    };
    return instructorInformationService;
});
