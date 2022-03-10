/**# One function each function.
 * 
 * Tienes una funcion para buscar el menor número en un rango de un array y 
otra para intercambiar la posición de dos números en un array. 
Esto pide a gritos ser empleado para ordenar rangos.

* Pega en el las funciones de los ejercicios correspondientes y añade el código necesario.
* Piensa que para ordenar un array te interesa más conocer el índice de la posición en la que
  se encuentra el número más pequeño que el valor del número en si.
 */
const numbers = [11,9,13,12,1,25,33,27,74,34,48,49,99]

// Comparar y Ordenar la Array

function ordenar(a,b) {return a - b};

console.log(numbers.sort(ordenar));

// Busca el número menor entro del Array.

function minorInRange(pos1, pos2, arraynum) {
    let menor = arraynum[pos1];
        for (let i = pos1; i <= pos2; i++) {
            if (arraynum[i]<menor){
            menor = arraynum[i];     
}
}
return menor;
}

// Modifica posición de dos números dentro de un Array.


console.log(numbers);

console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,7,numbers));
console.log(minorInRange(4,12,numbers));