const student = {
    nombre: "Xan",
    curso: "IFCT0109",
    notaMedia: 7.2,
    apto: true,
    modulosSuperados: [
        "MF3323",
        "MF4401",
        "MF1200"
    ]
}

// Show object - Mostrar objeto
console.log(student);
// Show property -  Mostrar porpiedades
console.log("Nombre:", student.nombre);

// Change property value - Cambiar propiedad value
student.nombre = "María"
console.log(student)

// You can do maths or anything - Puedes hacer matematicas o cualquier cosa
student.notaMedia++;
console.log(student);

// Adding new properties - Agregar propiedades nuevas
student['nacimiento'] = 1982;
console.log(student);

// Accesing arbitrary properties - Acceso a propiedades arbitrarias
const property = "nacimiento"
console.log(student[property]);

// Has this object a property? - ¿Tiene este objeto una propiedad?
console.log(student.hasOwnProperty("nacimiento"))
console.log(student.hasOwnProperty("cuentaBancaria"))