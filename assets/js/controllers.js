var controllers={};

controllers.HeaderCtrl = function($scope, $location, $cookieStore, ErrorHandler){
    $scope.authed = $cookieStore.get('authed')===undefined?false:true;
    $scope.setAntiToken = function (token_id, token_value) {
        $scope.antiTokenId = token_id;
        $scope.antiTokenValue = token_value;
    };
    $scope.$on('LOGOUT',function(event, args){
    });
    $scope.$on('ANTITOKEN',function(event, args){
        if(args.status === "success"){
            $scope.setAntiToken(args.token_id, args.token_value);
        }else{
            console.log('ANTITOKEN error');
            ErrorHandler.redirectToErrorPage('/error', 'Server Error', args);
        }
    })
    /*
     *$scope.login = function(){
     *    $cookieStore.put('authed','true');
     *    $scope.authed = true;
     *};
     *$scope.logout = function(){
     *    $cookieStore.remove('authed');
     *    $scope.authed = false;
     *};
     */
};

controllers.AppCtrl = function($scope, $http) {
    var TotalItem = 500;
    var startIndex = 1;
    $scope.totalItems = 500;
    $scope.itemsPerPage = 10;
    $scope.visiblePageNo = 10;
    $scope.initPageNo = 1;
    $scope.currentPage = 1;
    $scope.changePage = function(pageIndex) {
        $scope.currentPage = pageIndex;
        var userStartIndex = ($scope.currentPage-1)*$scope.itemsPerPage;
        $scope.visibleUsers = $scope.allUsers.slice(userStartIndex, userStartIndex + $scope.itemsPerPage);
    };
    $http.get('functions/getData.php'+ '?totalItem=' + TotalItem + '&startIndex' + startIndex).success(function (data) {
        $scope.allUsers = data;
        $scope.visibleUsers = $scope.allUsers.slice(0,$scope.itemsPerPage);
    });
};

controllers.FooterCtrl = function($scope){
    $scope.footer = function(){
        alert('Footer AntiTokenKey');
    };
    $scope.test = "test HeaderCtrl";
};


controllers.ErrorCtrl = function ($scope, $location) {
    console.log($location.path());
    if(typeof(Storage) !== "undefined") {
        $scope.errorMsg = sessionStorage.getItem('errorHandlerMsg');
    }else{
    }
};
