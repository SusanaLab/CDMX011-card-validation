const validator = {
    isValid: function val (card) {
       
        let tarjetaInvertida = []
        let arregloPares =[]
        let arregloImpares =[]
        let newArray = []
     

        tarjetaInvertida = card.split("").reverse();
        // Multiplicar x 2 aquellos dígitos que estaban en posiciones pares del arreglo.
        for (let i = 0; i < tarjetaInvertida.length; i+=2){
            const parsedDigit = parseInt(tarjetaInvertida[i])
            arregloImpares.push(parsedDigit)
        }

        for (let i = 1; i < tarjetaInvertida.length; i += 2) {
            let numberDoble  = parseInt(tarjetaInvertida[i]) * 2;
            
            if (numberDoble >= 10) {
                arregloPares.push(numberDoble - 9);  
            } else { 
                arregloPares.push(numberDoble);
            }
        }
            
        newArray = arregloImpares.concat(arregloPares);
        
        
        let suma = newArray.reduce(function (a, b) {
            return a + b;
        }, 0);
        
        return (suma % 10) == 0 // true or false
    },
    maskify: function (card) {  
        let cardnumber = []
        let hide = ""
        cardnumber = card.split("");

        for (let i = 0; i < cardnumber.length; i ++) { 
            let parsedDigit = cardnumber[i];

            if (i < cardnumber.length -4) { 
              hide = hide + "#";
            } else { 
              hide = hide + parsedDigit
            }           
        }

        return hide;   
    }   
}
                         
export default validator
