var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoValido = true;
  var alturaValida = true;

  if(peso <= 0 || peso >= 500) {
    tdImc.textContent = "Peso inválido!";
    pesoValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if(altura <= 0 || altura >= 3.00) {
    tdImc.textContent = "Altura inválida!";
    alturaValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if(pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
