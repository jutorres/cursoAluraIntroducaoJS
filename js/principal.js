var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = document.querySelector(".info-peso");
var tdAltura = document.querySelector(".info-altura");
var tdImc = document.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 500) {
  tdImc.textContent = "Peso inválido!";
  pesoValido = false;
}

if(altura <= 0 || altura >= 3.00) {
  tdImc.textContent = "Altura inválida!";
  alturaValida = false;
}

if(pesoValido && alturaValida) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}
