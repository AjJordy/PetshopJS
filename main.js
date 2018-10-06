var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);


var app = angular.module('myApp', []);
app.controller('cadCli', function($scope, $http) {
    $http.get("cadastro_cliente.htm")
    .then(function(response) {
        //First function handles success
        $scope.content = response.data;
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });
})


var app = angular.module('myApp', []);
app.controller('cadPet', function($scope, $http) {
    $http.get("cadastro_pet.htm")
    .then(function(response) {
        //First function handles success
        $scope.content = response.data;
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });
})

/*
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});
*/