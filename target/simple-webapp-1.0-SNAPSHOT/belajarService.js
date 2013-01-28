var moduleBelajarService = angular.module("belajar-service",[]);
    
moduleBelajarService.factory("BelajarService",["$http",function($http){
    var hasil = {};
        
    hasil.cariSemuaEmail = function(){
        return $http.get('json/daftarEmail.json');
    }
    hasil.daftarSosmed = [
        {social :"twitter" , account:"@A_Riyandi"},
        {social :"facebook" , account:"gee_ghel@yahoo.com"}];
    
    hasil.cariSosmed = function(){
        return hasil.daftarSosmed;
    }
    
    hasil.simpanSosmed = function(data){
        return hasil.daftarSosmed.push(data);
    }
    
    hasil.hapusSosmed = function(data){
        var indexDitemukan = -1 ;
        for (var i = 0; i < hasil.daftarSosmed.length; i++){
            if(data.account == hasil.daftarSosmed[i].account
                && data.social == hasil.daftarSosmed[i].social){
                indexDitemukan = i;
                break;
            }
        }
        if(indexDitemukan > -1){
            hasil.daftarSosmed.splice(indexDitemukan,1)
        }        
    }
    return hasil; 
}]);