/**Ya has creado una función para buscar el menor número de un array. 
 * Vas a modificarla de manera que busque el menor número entre dos determinados índices del array 
 * al final del mismo. Hazlo en el [index.js](index.js) creando una función de nombre ```minorInRange```. 
 * La función se emplearía de la siguiente manera:
```javascript
const numbers = [11,22,20,24];
const minor = minorInRange(1,3,numbers);
console.log(minor); // -> 20; 
 */
const numbers = [11,9,13,12]

// Put your code here

function minorInRange(pos1, pos2, arraynum) {
    let menor = arraynum[pos1];
        for (let i = pos1; i < pos2; i++) {
            const element = array[index];
            
        }

}

console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3),numbers);