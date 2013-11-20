var factories = {};

factories.ErrorHandler = function ($location, appConfig) {
    return {
        redirectToErrorPage : function (url, errType, msg) {
            console.log('redirectToErrorPage');
            if(appConfig.debugMode) {
                if(typeof(Storage) !== "undefined") {
                    sessionStorage.setItem('errorHandlerMsg', msg);
                    $location.path(url + '/' + errType);
                }else{
                    $location.path(url + '/' + errType + '?debug=fail');
                }
            }else{
                $location.path(url + '?type=' + errType);
            }
        }
    }
};
