//WHILE

//Sintáxis
/*
while();

while (condition) {
    
    //bloque de código o de instrucciones
    
}

let repetir = false;

while (repetir) {

    console.log("Al infinito y más allá!!")
    
}
*/

//Escribir un programa que solicite al usuario ingresar un número, el programa nos mencionará cuántas veces hay que sumar ese número consigo mismo para obtener 100 o más.

let numero, suma, veces = 0;

numero = parseInt(prompt("Ingrese un número en cifras : "));

suma = numero;

while (suma <= 100) {
    suma = suma + numero; // suma += numero;
    veces++; //veces = veces + 1    
}

alert('la suma se ha realizado '+ veces + ' veces'  );

// Escribir un programa que solicite una clave y no deje continuar mientras no se introduzca la palabra adecuada.
let password = "123456"

while (password !== "123456") {
    console.log("Ingrese el password correcto");    
}
