/** Devuelve el número de veces que aparece una letra dada
     * @param {string} letter - Letra a buscar
     * @param {array} countersObject - Array donde buscar */

const phrase = "No hay bien que por mal no venga";
const counters = {};
function countLetter (letter, countersObject) {

    let contador = 0;
        for (let i = 0; i < countersObject.length; i++) {
            if (countersObject[i] == letter) {	  
                contador++;       
        }	   
     }	  
            return contador;         
 }
         for (letter of phrase) {		  
        countLetter(letter, counters)
        counters[letter]=countLetter(letter,phrase);		
}		
            console.log(counters); 
    
         for (letter of phrase) {
            console.log(letter);
            countLetter(letter, counters);
}

console.log(counters);