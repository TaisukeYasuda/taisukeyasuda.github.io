mainApp.controller('eduCtrl', function($scope, $http) {
    $scope.info = {};
    $http.get("json/edu.json").then(function(response) {
        $scope.info = response.data;
    });
});

mainApp.controller('expCtrl', function($scope, $http, $sce) {
    $scope.info = {};
    $http.get("json/exp.json").then(function(response) {
        $scope.info = response.data;
    });
});
