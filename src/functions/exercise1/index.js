/** Una función que busque y entregue (return) 
 * el menor valor de un array de números, 
 * insertando el código necesario en el lugar indicado por el comentario.
 * Primero resuelvo como hayar el número menor, al recorrer un Array
*/

const numbers1 = [22,1,4,3,5,7,8,9,12,11];
const numbers2 = [22,7,4,3,5,7,8,9,12,11];
const numbers3 = [22,6,4,4,5,7,8,9,12,11];
const numbers4 = [22,9,6,8,5,7,8,9,12,11];

function minorValue(numbers1) { 
                               
    let temp = numbers1[0];

    for (let i = 0; i < numbers1.length; i++) {
        if (numbers1[i] < temp) {
           temp = numbers1[i];
        }
    }
    console.log(temp);
    return temp; 
}

const minor1 = minorValue(numbers1); 
console.log(minor1);
console.log(minorValue(numbers2));
console.log(minorValue(numbers3));
console.log(minorValue(numbers4));