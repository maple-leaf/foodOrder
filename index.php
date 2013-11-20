<!DOCTYPE html>
<html>
<head>
    <title>Food Order</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.css" type="text/css" media="screen">
</head>
<body>
    <header  ng-controller="HeaderCtrl">
        <div ng-include src="'/views/partials/header.html'"></div>
    </header>
    <div ng-view>
    </div>
    <footer ng-controller="FooterCtrl">
        <div ng-include src="'/views/partials/footer.html'"></div>
    </footer>
    <script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-ui-bootstrap3/ui-bootstrap-tpls.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-cookies/angular-cookies.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-route/angular-route.min.js"></script>
    <script type="text/javascript" src="/assets/js/templates.js"></script>
    <script type="text/javascript" src="/assets/js/factories.js"></script>
    <script type="text/javascript" src="/assets/js/filters.js"></script>
    <script type="text/javascript" src="/assets/js/directives.js"></script>
    <script type="text/javascript" src="/assets/js/controllers.js"></script>
    <script type="text/javascript" src="/assets/js/app.js"></script>
</body>
</html>
