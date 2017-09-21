/**
 * Module setter
 * @type type
 */
angular.module('mpApp.controllers',
        ['mpApp.services','mpApp.providers','mpApp.directives'])


        .controller('catedraticoController', function ($scope, $log, $http, instructorInformationService,repo) {



            function obtenerDatos(response) {
                $scope.userData = response.data;
                repo.obtenerRepos($scope.userData.repos_url,obtenerRepos);
            };
            
            function obtenerRepos(response) {
                $scope.reposData = response.data;
            };
            
            function obtenerListComimits(response) {
                $scope.commits = response.data;
            };


            $scope.getCommits = function (url) {
                repo.detalleRepo(url, obtenerListComimits);
            };

            $scope.getCatedratico = function () {

                $scope.userData = {};
                $scope.reposData = [];
                $scope.commits = [];

                instructorInformationService.instructorData($scope.search, obtenerDatos);

                $scope.static = true;
            };

        });


