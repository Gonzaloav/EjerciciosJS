let numbers = [0,1,2,3,4,5,6,7,8,9]
const left = [numbers]
const right = [numbers]

    for (let left = 0; left < 9 ; left++) {
        for (let right = 0; right < 9; right++ ){
             console.log(`Left: ${left}, Right: ${right}, Resultado: ${left * right}`);
    }
}

//que imprima en la pantalla las tablas de multiplicar. (# Different nested for.)