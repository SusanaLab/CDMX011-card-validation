/* eslint-disable no-undef */
import validator from './validator.js';

const botonn = document.getElementById("miboton");
botonn.addEventListener("click",getNumber);

function getNumber() {
    const card = document.getElementById("caja").value;
    validator.isValid(card)
    //console.log(card);
 
 
    if (validator.isValid(card) === true ) {
   
        document.getElementById("validaOInvalida").innerHTML = "Tarjeta Valida"; 
      }
      
    else {document.getElementById("validaOInvalida").innerHTML = "Tarjeta Invalida"; 
      }
      //console.log(validated);

    const show = validator.maskify(card);
    document.getElementById("mfy").innerHTML = ("Tarjeta numero:  " + show );
    
        console.log(show);

     }

 
    

 



