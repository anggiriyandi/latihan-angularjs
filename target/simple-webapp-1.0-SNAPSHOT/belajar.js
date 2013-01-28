var moduleBelajarController = angular.module("belajar-controller",["belajar-service"]);

moduleBelajarController.controller("HalloController",["$scope","BelajarService",function($scope, BelajarService){
    $scope.nama = "anggi"
    BelajarService.cariSemuaEmail()
    .success(function(data , status){
        $scope.daftarEmail = data;
        $scope.status = status;
    })
    .error(function(){
        alert("terjadi error");
    });
                     
    $scope.tambahEmail = function(){
        if($scope.emailBaru == null){
            alert("Email harus diisi");
        }
        else{
            $scope.daftarEmail.push($scope.emailBaru);
            $scope.emailBaru = null;
        }
    }
}]);

moduleBelajarController.controller("CobaController",function($scope,BelajarService){
    $scope.nama = "Riyandi"
    $scope.object = BelajarService.cariSosmed();
    
    $scope.tambahObject = function(){
        BelajarService.simpanSosmed($scope.x)
        $scope.x = null;
    }
    
    $scope.edit = function(barisYangDipilih){
        $scope.x = barisYangDipilih;        
    }
    
    $scope.hapus = function(barisYangDipilih){
        BelajarService.hapusSosmed(barisYangDipilih);

    }
});