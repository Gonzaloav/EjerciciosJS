/**# By myself

¿Puede una función hacer referencia a si misma?. Pues sí. Se llama recursividad.

Tienes un ejemplo en el fichero [example.js](example.js).

Fíjate en la función ```sort``` en ese fichero. Intenta analizar, con lápiz y papel, 
cómo funciona. ¿Qué información recibe la función cada vez que se ejecuta?.
 * 
 */

const numbers = [11,9,13,12,0,2,99,2,34,5,4,9,22,16,76,35,75,2,35,8,74]

function minorInRange (start, end, array) {
    let menorIdx = start;
    for (let idx = start+1; idx < end; idx++) {
        if ( array[menorIdx] > array[idx] ) {
            menorIdx = idx;
        }
    }
    return menorIdx
}

function swap (idx1, idx2, array) {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

function sort (array, start = 0) {
    let minorIdx = minorInRange(start, array.length, array);
    if ( minorIdx > start ) swap(start, minorIdx, array);
    if ( start < array.length ) sort(array, ++start)
}

sort(numbers);

console.log(numbers);