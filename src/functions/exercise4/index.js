/**Modifica el fichero [index.js](index.js) creando una función de nombre ```swap``` que calcule intercambie
 *  la posición de dos elementos de un array. La función se emplearía de la siguiente manera:
```javascript
const numbers = [21,22,23,24];
swap(1,3,numbers);
console.log(numbers); // -> [21,24,23,22]
```
* Observa que la función cumple su cometido incluso sin necesidad de emplear ```return```.
 */

const numbers = [11,12,13,14]

function minorInRange(a,b,array){
    let minor = array[a]
    for(let idx = a; idx <= b;idx++){
        if(array[idx] < minor){
            minor = array[idx]
        }
    }
    return minor
}
console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3,numbers));



// Put your code here

swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);