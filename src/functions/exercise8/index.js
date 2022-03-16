numbers = [4,2,9,6,1,0,3,6,5,2,9];

function aGreatherThanB (a, b) {
    // Put your code here
    function aGreatherThanB (a, b) {	return b > a;		
}

function bGreatherThanA (a,b) {
    // Put your code here
    function bGreatherThanA (a,b) {	return b > a;
}

function swap (idxA, idxB, array) {
    // Put your code here
    function swap (idxA, idxB, array) {    	
        const temp = array[idxA];	      
            array[idxA] = array[idxB];		
            array[idxB] = temp;		
}

function sort (comparator, array) {
    for ( let currentIdx = 0 ; currentIdx < array.length-1 ; currentIdx++) {
        for ( let nextIdx = currentIdx+1 ; nextIdx < array.length ; nextIdx++ ) {
            if (
                comparator(array[currentIdx], array[nextIdx])
            ) swap (currentIdx, nextIdx, array)
        }
    }
}

console.log(numbers);
sort(aGreatherThanB, numbers);
console.log(numbers);
sort(bGreatherThanA, numbers);
console.log(numbers);



Objects as Maps 1.-  Index 1.- 
const phrase = " Aprende a vivir y sabrás morir bien. Confucio";
const counters = {};
/** Devuelve el número de veces que aparece una letra dada
 * @param {string} letter - Letra a buscar
 * @param {array} countersObject - Array donde buscar
 * @returns {number} */
function countLetter (letter, countersObject) {		let contador = 0;
    for (let i = 0; i < countersObject.length; i++) {
        if (countersObject[i] == letter) {	  contador++;        }	   }	  return contador;         }
for (letter of phrase) {		  countLetter(letter, counters)
    counters[letter]=countLetter(letter,phrase);		}		console.log(counters);
------------------------
Objects as Maps 1.-  Index 2.- 
const phrase = " Aprende a vivir y sabrás morir bien. Confucio";
const counters = {};
/** Devuelve el número de veces que aparece una letra dada
 * @param {string} letter - Letra a buscar
 * @param {array} countersObject - Array donde buscar     * @returns {number}	 */
function countLetter(letter, countersObject) {		 let contador = 0;
    for (let i = 0; i < countersObject.length; i++) {
        if (countersObject[i] == letter) {	   contador++;	   }	 }	  return contador;        }
const frase = [];
for (letter of phrase) {		frase.push(letter);	 countLetter(letter, counters)	    }
console.log(frase);	console.log(countLetter(" ", frase));	console.log(counters)
--------------------------
Objects as Maps 2.-  /**Crea una función sort que ordene los participantes por su tiempo, de la persona más rápida a la más lenta.*/
const chrono = [
{ name: "Ana",		time: 102.01	 },	{  name: "Pablo",	 time: 105.82	 },
{name: "Marco",	time: 100.4	 },	{  name: "Luisa",	 time: 103.39	},
{ name: "Pedro",	 time: 109.09	 },	]
console.log(chrono.length);
function sort(objeto) {
    for (let i = 0; i < objeto.length; i++) {
        for (let j = 0; j < objeto.length; j++) {
            if (objeto[i].time > objeto[j].time) {
                idxmenor = objeto[j];
                objeto[j] = objeto[i];
                objeto[i] = idxmenor;	  }	   }	
console.log(objeto);	}	sort(chrono);	//           console.log(JSON.stringify(chrono))
/*function sort(objeto) {	//	for (runner of objeto) {
for (runner2 of objeto) {		let temporal = runner.time;
runner.time = runner2.time;	 	runner2.time = temporal;
let temporal2 = runner.name;		runner.name = runner2.name;		 
runner2.name = temporal2;	  }	 }	}	console.log(objeto);  	}	*/
---------------------------
Objects as Maps 3.-  /** ¿Has completado el ejercicio 8 de funciones? Adapta el código para poder ordenar los corredores del array chrono del ejercicio anterior. Pega en index.js tus soluciones del ejercicio 8 de funciones. Sólo deberías de necesitar añadir dos pequeñas funciones:	aFasterThanB(runnerA, runnnerB)	Entrega true si runnerB.time es mayor que runnerA.time. En otro caso entrega false.		bFasterThanA(runnerA, runnnerB)
Entrega true si runnerA.time es mayor que runnerB.time. En otro caso entrega false. */
const chrono = [{ name: "Ana",	time: 102.01	 },	{  name: "Pablo", time: 105.82	 },
{name: "Marco",	time: 100.4	 },	{  name: "Luisa",	 time: 103.39	},
{ name: "Pedro",	 time: 109.09	 },	]
+ function aFasterThanB(a,b) {	  return a > b;	}
+ function bFasterThanA(a, b) {	 return b > a;	}
+ function swap(runnerA, runnnerB, people) {
    const temp = people[runnerA].time;
    people[runnerA].time = people[runnnerB].time;
    people[runnnerB].time = temp;	}
+ function sort(comparator, people) {
    for (let currentIdx = 0; currentIdx < people.length - 1; currentIdx++) {
        for (let nextIdx = currentIdx + 1; nextIdx < people.length; nextIdx++) {
if ( comparator(people[currentIdx].time, people[nextIdx].time)
) swap(currentIdx, nextIdx, people)	 }	}	}
sort(aFasterThanB, people);	console.log(people);
sort(bFasterThanA, people);	console.log(people);
----------------------------
Caso1.- /**Modifica el código de este sitio para dividir entre dos los valores de los modelos antes de mostrarlos. Solucionalo sin escribir nuevas funciones. En la linea 5 cambiar ${item} por ${item/2}*/
li.innerText = `Importe: ${ item/2 } puntos.`;
----------------------
Caso 2.- Haz que cada vez que se pulse el botón x2 se duplique la cantidad que hay en el input.
Index.html = <input id="multiplicador" type="text" value="3"> 
<button id="botonX2">x2</button>
Index.js = export function duplicate(valor) {	 return valor*2;		}
-------------------------------------
Caso 3.- Incorpora una función "compareRunners" que permita que el método .sort del array pueda ordenar a los corredores según sus tiempos.
// La siguiente función es empleada por el método sort de un array. Informate sobre los requisitos que ha de cumplir la función.
export function compareRunners (corredorA, corredorB) {
    return corredorA.time - corredorB.time	}
----------------------------
Caso4.- Añade un botón para disparar el manejador de eventos "toggleShowCompletedHandler".
Index. Html = <input id="boton" type="submit" value="boton">
Index.jms  = const boton=document.querySelector("#boton");
boton.addEventListener(	"click",		 (event) => {
        toggleShowCompletedHandler(event);	}	);
---------------------------------


Caso 5.- La función "dataToHTMLList" está incompleta. Está generando el contenido de  una tabla (mira bien) pero las celdas están vacías. Modifícala para conseguir que aparezcan los datos de las personas participantes.	
export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {		 const row = document.createElement("tr");
            const tdName = document.createElement("td");
            const tdTime = document.createElement("td");
// Repuesta:
            tdName.innerText = item.name;
            tdTime.innerText = item.time; 	//
            row.append(tdName, tdTime);	   return row;	  }	 )
    document.querySelector("#runnersRows").append(...HTMLElements);   }
------------------
Caso 6.- Conecta el botón "Drop completed" con el handler "removeCompletedHandler". No modifiques el HTML.
Controllers.mjs = const boton= document.querySelector("button");
boton.addEventListener("click", (event) => {        removeCompletedHandler (event);   })
-----------------------

