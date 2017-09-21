var module = angular.module('mpApp.providers', []);

module.provider("repo", function () {
    var gitUrl;
    return {
        setLanguage: function (value) {
            gitUrl = value;
        },
        $get: function ($http) {
            var repoService = {};
            repoService.obtenerRepos = function (url, update) {

                var url = url;

                $http({method: 'GET',
                    url: url})
                        .then(function success(response) {
                            update(response);
                        }, function error(response) {
                            update();
                        });
            };
            repoService.detalleRepo = function (url, update) {

                var url = gitUrl  + url + '/commits';


                $http({method: 'GET',
                    url: url})
                        .then(function success(response) {
                            update(response);
                        }, function error(response) {
                            update();
                        });
            };
            return repoService;
        }
    };
});

module.config(function (repoProvider) {
 repoProvider.setLanguage("https://api.github.com/repos/");
});


