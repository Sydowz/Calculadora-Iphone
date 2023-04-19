var primeiroValor = "";
var operador = "";
var resultado = "";

function mostrar(valor) {
  var visor = document.getElementById("visor");
  visor.innerHTML += valor;
}

function limpar() {
  document.getElementById("visor").innerHTML = "";
}

function apagar() {
  var visor = document.getElementById("visor");
  visor.innerHTML = visor.innerHTML.slice(0, -1);
}

function adicionarVirgula() {
  var visor = document.getElementById("visor");
  if (visor.innerHTML.indexOf(",") === -1) {
    visor.innerHTML += ",";
  }
}

function converterValor(valor) {
  return parseFloat(valor.replace(",", "."));
}

function multiplicar() {
  var visor = document.getElementById("visor");

  primeiroValor = visor.innerHTML;
  operador = "x";
  visor.innerHTML = "";
}

function porcentagem() {
    var visor = document.getElementById("visor");
    var valor = parseFloat(visor.innerHTML);
    var resultado = valor / 100;
    visor.innerHTML = resultado;
  }

function soma() {
  var visor = document.getElementById("visor");

  primeiroValor = visor.innerHTML;
  operador = "+";
  visor.innerHTML = "";
}

function dividir() {
  var visor = document.getElementById("visor");
 
  primeiroValor = visor.innerHTML;
  operador = "/";
  visor.innerHTML = "";
}

function subtrair() {
  var visor = document.getElementById("visor");
  
  primeiroValor = visor.innerHTML;
  operador = "-";
  visor.innerHTML = "";
}

function calcular() {
  var visor = document.getElementById("visor");
  if (operador == "x") {
    resultado = converterValor(primeiroValor) * converterValor(visor.innerHTML);
    visor.innerHTML = resultado.toString().replace(".", ",");
  } else if (operador == "+") {
    resultado = converterValor(primeiroValor) + converterValor(visor.innerHTML);
    visor.innerHTML = resultado.toString().replace(".", ",");
  } else if (operador == "-") {
    resultado = converterValor(primeiroValor) - converterValor(visor.innerHTML);
    visor.innerHTML = resultado.toString().replace(".", ",");
  } else if (operador == "/") {
    resultado = converterValor(primeiroValor) / converterValor(visor.innerHTML);
    visor.innerHTML = resultado.toString().replace(".", ",");
  }
}
