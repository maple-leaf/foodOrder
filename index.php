<!DOCTYPE html>
<html>
<head>
    <title>Food Order</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" type="text/css" media="screen">
</head>
<body>
    <header ng-include src="'views/partials/header.html'" ng-controller="HeaderCtrl">
    </header>
    <div ng-controller="AppCtrl">
    </div>
    <footer>
        <h1>footer</h1> 
    </footer>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/angular-ui-bootstrap3/ui-bootstrap-tpls.min.js"></script>
    <script src="js/app.js"> </script>
</body>
</html>
