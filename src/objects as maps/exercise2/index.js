/**Crea una función sort que ordene los participantes por su tiempo, 
 * de la persona más rápida a la más lenta.*/

const chrono = [
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

console.log(chrono.length);

function sort(objeto) {
    for (let i = 0; i < objeto.length; i++) {

        for (let z = 0; z < objeto.length; z++) {

            if (objeto[i].time > objeto[z].time) {
                idxmenor = objeto[z];
                objeto[z] = objeto[i];
                objeto[i] = idxmenor;}	  
    }	 
}	
console.log(objeto);	
}	
sort(chrono);	          
console.log(JSON.stringify(chrono));