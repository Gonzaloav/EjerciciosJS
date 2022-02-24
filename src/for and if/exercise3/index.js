const numbers = [0,99,3,121,12,1,2];
let sum = 0;
let average = 0;

for (let item of numbers) {
    sum = average + item;
    average++;
}
sum = average / sum; 

console.log(average)
//calcular la media de los numeros del array ```numbers```. Recuerda que para calcular el promedio necesitarás la suma de los números, pero también la cantidad de números que has sumado.