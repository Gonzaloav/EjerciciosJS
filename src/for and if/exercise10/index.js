/**Compara el primer elemento del array con cada uno de los siguientes. 
 Si alguno de los elementos siguientes es más pequeño que el primero, 
 intercambia la posición de ese elemento y el primero, y asi con todo el Array 
 */ 
 
let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]

console.log( numbers)

for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) { 
            
            let casilla = numbers[i];
           
            numbers[i] = numbers[j];
            
            numbers[j] = casilla;
            console.log(numbers)
        }
    }
}
console.log(numbers)


