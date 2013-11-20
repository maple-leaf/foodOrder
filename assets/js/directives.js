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
                        $compile(ele.contents())(scope);
                    });
                }else{
                    $http.get(templateurl.login).success(function(html){
                        ele.html(html);
                        $compile(ele.contents())(scope);
                    });
                }
            });
        }
    };
};

directives.login = function(){
    return {
        templateUrl: '/assets/templates/login.html'
    };
};

directives.logout = function($parse){
    return {
        scope: true,
        transclude: true,
        templateUrl: '/assets/templates/logout.html',
        controller: function ($scope, $element) {
            $scope.broadcastLogout = function() {
                $scope.$emit('LOGOUT', 'logout from directive');
            };
        }
    };
};

directives.antiToken = function($http){
    return {
        scope: true,
        link: function (scope, ele, attrs) {
            $http.get(attrs.antiToken).success(function(data){
                scope.$parent.$emit('ANTITOKEN',data);
            });
        }
    }
};
