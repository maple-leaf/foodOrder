var app= angular.module("appModule",['ui.bootstrap']);
app.controller("HeaderCtrl", function($scope){
    $scope.langs = ["zh","en"];
    $scope.authed = false;
});
app.controller("AppCtrl", function($scope){
    $scope.langs = ["zh","fr"];
});
angular.bootstrap(document.body,["appModule"])
