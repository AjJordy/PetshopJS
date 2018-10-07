var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("conteudo").innerHTML =
    this.responseText;
    }
};
xhttp.open("GET", "pesquisar_cliente.html", true);
xhttp.send();

function cliente() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("conteudo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "pesquisar_cliente.html", true);
    xhttp.send();
}

function caixa() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Principal").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "cadastro_cliente.html", true);
    xhttp.send();
}

function estoque() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Principal").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "cadastro_cliente.html", true);
    xhttp.send();
}

