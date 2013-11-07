var controllers={};

controllers.HeaderCtrl = function($scope){
};

controllers.AppCtrl = function($scope, $cookieStore) {
    $scope.authed = $cookieStore.get('authed')===undefined?"false":"true";
    $scope.login = function(){
        $cookieStore.put('authed','true');
        $scope.authed = true;
    };
    $scope.logout = function(){
        $cookieStore.remove('authed');
        $scope.authed = false;
    };
};
