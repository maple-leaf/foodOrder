var app= angular.module("appModule",['ngRoute', 'ngCookies','ui.bootstrap']);
app.config(function($routeProvider, $locationProvider) {
    /*
     *$provider.decorator('$sniffer',function($delegate){
     *    $delegate.history = false;
     *    return $delegate;
     *});
     */
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'AppCtrl'
    })
    .when('/error/:errorType',{
        templateUrl: '/views/error.html',
        controller: 'ErrorCtrl'
    });

    $locationProvider.html5Mode(true).hashPrefix('!');
});
app.constant('appConfig', {version: '1.0.0', debugMode: true});
app.factory(factories);
app.filter(filters);
app.directive(directives);
app.controller(controllers);
angular.bootstrap(document.body,["appModule"]);
