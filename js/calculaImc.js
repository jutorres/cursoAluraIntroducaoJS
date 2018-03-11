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

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if(!pesoValido) {
    tdImc.textContent = "Peso inválido!";
    pesoValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaValida) {
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

function validaPeso(peso) {
  if(peso > 0 && peso <= 500) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if(altura > 0 && altura <= 3.00) {
    return true;
  } else {
    return false;
  }
}
