'use strict';
//Escribir una función que reciba un array de números y devuelva la suma de todos sus elementos.
function sumarEdadesPersonas(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i].edad;
    }
    return suma;
}

// Ejemplo de uso
const personas = [
    { nombre: "Fernando", edad: 19 },
    { nombre: "Domenica", edad: 30 },
    { nombre: "Ruben", edad: 35 }
];
const sumaEdades = sumarEdadesPersonas(personas);
alert(`La suma de las edades es: ${sumaEdades}`);
