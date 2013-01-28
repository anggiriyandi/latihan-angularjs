var modul = angular.module("belajar-routing",[]);

modul.controller("HomeController",["$scope",function($scope){
    $scope.nama = "anggi";    
}]);

modul.config(["$routeProvider",function($routeProvider){
        $routeProvider
            .when('/home',{templateUrl: 'pages/home.html' , controller: 'HomeController'})
            .when('/about',{templateUrl: 'pages/about.html'})
            .otherwise({redirectTo: 'pages/404.html'});
}]);