/**Hay varios problemas en el. Uno tiene que ver con el concepto de ámbito de las variables y 
 * otro con la necesidad de usar nombres claros y significativos en nuestro código.
 */

let number = 0;

function plusone(number) {
    number = number + 1;
    return number;
}

plusone(1);

console.log(number)