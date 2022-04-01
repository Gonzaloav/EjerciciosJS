/** ¿Has completado el ejercicio 8 de funciones? 
 * Adapta el código para poder ordenar los corredores del array chrono del ejercicio anterior. 
 * Pega en index.js tus soluciones del ejercicio 8 de funciones. Sólo deberías de necesitar 
 * añadir dos pequeñas funciones:	
 * aFasterThanB(runnerA, runnnerB)	Entrega true si runnerB.
 * time es mayor que runnerA.time. En otro caso entrega false.		
 * bFasterThanA(runnerA, runnnerB)
Entrega true si runnerA.time es mayor que runnerB.time. En otro caso entrega false. */

const people = [
    {
        name: "Ana",
        time: 102.01
    },
    {
        name: "Pablo",
        time: 105.82
    },
    {
        name: "Marco",
        time: 100.4
    },
    {
        name: "Luisa",
        time: 103.39
    },
    {
        name: "Pedro",
        time: 109.09
    },
]

function aFasterThanB(a,b) {	  
         return a > b;	
}

function bFasterThanA(a, b) {
    	 return b > a;	
}
function swap(runnerA, runnnerB, people) {
    const temp = people[runnerA].time;
    people[runnerA].time = people[runnnerB].time;
    people[runnnerB].time = temp;	
}

function sort(comparator, people) {

    for (let currentIdx = 0; currentIdx < people.length - 1; currentIdx++) {

        for (let nextIdx = currentIdx + 1; nextIdx < people.length; nextIdx++) {

if ( comparator(people[currentIdx].time, people[nextIdx].time)
) swap(currentIdx, nextIdx, people)
	     }	
    }	
}
sort(aFasterThanB, people);	
console.log(people);
sort(bFasterThanA, people);	
console.log(people);

sort(aFasterThanB, numbers)
sort(bFasterThanA, numbers)