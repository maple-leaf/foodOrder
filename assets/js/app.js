var app= angular.module("appModule",['ngCookies','ui.bootstrap']);
app.directive(directives);
app.controller(controllers);
angular.bootstrap(document.body,["appModule"])
