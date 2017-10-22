var app = angular.module('userApp', ['ngRoute', 'ngMaterial', /*'$mdDateLocaleProvider'*/]);
// agGrid.initialiseAgGridWithAngular1(angular); //move into dependecies 'agGrid'

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './views/user/login.html',
        controller: 'loginController',
        controllerAs: 'lc'
    }).otherwise({
            redirectTo: '/'
        });
}])