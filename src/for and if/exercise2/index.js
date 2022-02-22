const numbers = [0,1,2,4,5,9,3,6,7,8];

let counter = 0;
console.log (counter)
for (let item of numbers) {
    // counter++;
    console.log(numbers[counter]);
    counter = counter+1;
}

console.log(counter);
