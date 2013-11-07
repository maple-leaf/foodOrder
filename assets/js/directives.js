var directives = {};

directives.auth = function($compile, $http){
    return {
        restrict: 'E',
        scope: {
            login: '&',
            logout: '&',
            authed: '@'
        },
        link: function(scope, ele, attrs) {
            var templateurl = {
                'login': 'templates/login.html',
                'logout': 'templates/logout.html'
            };
            if(attrs.templateurl){
                templateurl = JSON.parse(attrs.templateurl);
            };
            scope.$watch('authed', function(newval) {
                if(newval === "true") {
                    $http.get(templateurl.logout).success(function(html){
                        ele.html(html);
                        $compile(ele.contents())(scope)
                    });
                }else{
                    $http.get(templateurl.login).success(function(html){
                        ele.html(html);
                        $compile(ele.contents())(scope)
                    });
                }
            });
        }
    };
};
