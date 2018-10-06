const fs = require('fs');
const express = require('express');
const app = express();
var path = require('path')

var server = app.listen(8080);

app.use(express.static(path.join(__dirname, 'View'))); 

app.get('/', function(req, res){
    fs.readFile('View/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

app.get('/cadastrarPet', function(req, res){
    fs.readFile('View/cadastro_pet.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

app.get('/cadastrarCliente', function(req, res){
    fs.readFile('View/cadastro_cliente.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});




