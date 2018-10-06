var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
//   database: "Petshop"
});

// Criar BD
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE Petshop", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });


// Cria tabela do cliente
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE cliente (clienteID INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), sobrenome VARCHAR(255), cpf VARCHAR(11) , telefone VARCHAR(25) ," 
               +"email VARCHAR(30), endereco VARCHAR(40), whatsapp BOOLEAN)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});

// Cria tabela do pet
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE pet (petID INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), especie BOOLEAN, porte SMALLINT,raca VARCHAR(255),alergia VARCHAR(255),"
              + "problemas VARCHAR(255),observacao VARCHAR(255), sexo BOOLEAN, medicamento VARCHAR(255), perfume BOOLEAN, castrado BOOLEAN,vermifugado DATE,v8 DATE,"
              + "antirabica DATE)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});


// Cria tabela de relação entre pet e cliente
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE client_pet (cliente_petID INT AUTO_INCREMENT PRIMARY KEY, petID int, clienteID int," 
              + "FOREIGN KEY (petID) REFERENCES pet(petID)), FOREIGN KEY (clienteID) REFERENCES cliente(clienteID))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});
