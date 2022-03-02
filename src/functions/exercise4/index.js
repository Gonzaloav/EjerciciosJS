/**Modifica el fichero [index.js](index.js) creando una función de nombre ```swap``` que calcule  y 
 * intercambie la posición de dos elementos de un array. La función se emplearía de la siguiente manera:
```javascript
const numbers = [21,22,23,24];
swap(1,3,numbers);
console.log(numbers); // -> [21,24,23,22]
```
* Observa que la función cumple su cometido incluso sin necesidad de emplear ```return```.
 */

const numbers = [11,12,13,14]

function swap(pos1, pos2, arraynum) {
    const temp = arraynum[pos1];
    arraynum[pos1] = arraynum[pos2];
    arraynum[pos2] = temp;

}

swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);
