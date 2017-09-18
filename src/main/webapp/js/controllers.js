/**
 * Module setter
 * @type type
 */
angular.module('mpApp.controllers',
        ['mpApp.services'])


        .controller('catedraticoController', function ($scope, $log, $http, instructorInformationService) {


            
            $scope.obtenerDatos = function (response) {

                $scope.userData = response;

            };
            

            $scope.getCatedratico = function () {

                $scope.userData = {};


                $log.warn('nickname' + instructorInformationService.instructorData($scope.search));

                $scope.dev = instructorInformationService.instructorData($scope.search);
                
                $scope.static = true;
                
                $log.warn($scope.dev.nickname);


            };

        });


