'use strict';
//Escribir una función que reciba un array de números y muestre cada uno de sus elementos multiplicado por 3.
function mostrarEdadesPerrosMultiplicadasPorTres(arr) {
    for (let i = 0; i < arr.length; i++) {
        alert(`Edad del perro ${arr[i].nombre} multiplicada por 3 es: ${arr[i].edad * 3}`);
    }
}


const perros = [
    { nombre: "Milo", edad: 4 },
    { nombre: "Max", edad: 2 },
    { nombre: "Luz", edad: 3 }
];
mostrarEdadesPerrosMultiplicadasPorTres(perros);
