const numbers = [0,1,5,2,7,5,0,0,9,5,5,6];
let counter = 0;
const number1 = 5;

for (item of numbers){
    if (item === 5) {
        counter = counter+1;
    }
}

console.log(counter)

// imprimir la cantidad de veces que el número 5 aparece en el arrays