
import validator from './validator.js';

const botonn = document.getElementById("miboton");
botonn.addEventListener("click", getNumber);

function getNumber() {
  const card = document.getElementById("caja").value;
  validator.isValid(card)
  if (validator.isValid(card) === true) {
    document.getElementById("validaOInvalida").innerHTML = "Tarjeta Valida";
  }
  else {
    document.getElementById("validaOInvalida").innerHTML = "Tarjeta Invalida";
  }
  const show = validator.maskify(card);
  document.getElementById("mfy").innerHTML = ("Tarjeta numero:  " + show);

}








