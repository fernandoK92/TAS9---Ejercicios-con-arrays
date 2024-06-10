'use strict';
//Escribir una función que reciba un array de strings y muestre cada elemento con su posición.
function mostrarElementosConPosicion(arr) {
    for (let i = 0; i < arr.length; i++) {
        alert(`Posición ${i}: ${arr[i]}`);
    }
}

// Ejemplo de uso
const strings = ["carro", "bicicleta", "moto"];
mostrarElementosConPosicion(strings);

