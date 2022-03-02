/**una función que busque y entregue (return) el menor valor de un array de números, 
 * insertando el código necesario en el lugar indicado por el comentario.
 */


const numbers1 = [22,1,4,3,5,7,8,9,12,11];
const numbers2 = [22,7,4,3,5,7,8,9,12,11];
const numbers3 = [22,6,4,4,5,7,8,9,12,11];
const numbers4 = [22,9,6,8,5,7,8,9,12,11];

function minorValue(array) {

    // Put your code here
    
        let temp = array[0];
        for(let idx = 1; idx < array.length; idx++){
            if(array[idx] < temp){
                temp = array[idx]; 
            }
        }
        return temp   
}

const minor1 = minorValue(numbers1);
console.log(minor1);
console.log(minorValue(numbers2));
console.log(minorValue(numbers3));
console.log(minorValue(numbers4));