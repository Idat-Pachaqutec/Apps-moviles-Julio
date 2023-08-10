// FOR
// Sintáxis
/*
for

for (let i = 0; i < array.length; i++) {
    const element = array[i];
  
}

Escribir un programa para calcular la tabla de multiplicar del 1 al 10.


let ingresarNumero = parseInt(prompt("Ingrese el número :"))

for(let i = 1; i < 11; i++){

    let resultado = ingresarNumero * i;

    console.log(ingresarNumero + ' X ' + i + '=' + resultado);
}
*/

// Escribir un programa que simule el recorrido por todos los pisos de un edificio visitando todas la puertas( nuestro edificio tiene solo dos plantas, con tres vecinos cada uno)

let piso, puerta;

for (let piso = 1; piso < 3 ; piso++) {
    for(let puerta = 1; puerta < 4; puerta++){
        alert('Piso = ' + piso + " " + " Puerta = " + puerta);
    }       
    
}




