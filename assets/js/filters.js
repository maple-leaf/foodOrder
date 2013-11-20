var filters = {};

filters.trustAsHtml = function($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    }
};
