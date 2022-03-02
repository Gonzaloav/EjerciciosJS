/**  ordenar los números en un array.  
 * Compara el primer elemento del array con cada uno de los siguientes. Si alguno de los elementos 
 * siguientes es más pequeño que el primero, intercambia la posición de ese elemento y el primero. 
 * Ya tenemos el elemento más pequeño en la primera posición.
  */ 


let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]

const and = 1;

console.log ("Desordenados", numbers)

const left = [numbers]
const right = [numbers]

    for (let left = 0; left < 9 ; left++) {
        for (let right = 0; right < 9; right++ ){
             console.log(`Left: ${left}, Right: ${right}, Resultado: ${left * right}`);
    }
}  

            if (numbers [outer] > numbers[left]){
                let temp = null;
                temp = numbers[outer];
                numbers[outer] = numbers [left]
                numbers[left] = temp;
                console.log ("proceso", numbers)
        }
    }
}
console.log ("Ordenados", numbers)
