/** Función que calcule la raíz cuadrada, a menos que se le indique otra potencia.
 * ## Power
```javascript
5**2 // -> 25 elevado al cuadrado
2**3 // -> 8 elevado al cubo
25**(1/2) // -> 5 raíz cuadrada
8**(1/3) // -> 2 raíz cúbica
 */

 function power ( potencia, valor = (1/2)){
    return potencia **valor
}

console.log(power(25))
console.log(power(8,1/3))
console.log(power(2,3))
console.log(power(5,2))