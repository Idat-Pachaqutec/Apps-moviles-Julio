// Do - While
// Sintáxis

// do
/*
do {
    //bloque o código de instrucciones
} while (condition);

Escribir un programa que solicite al usuario que ingrese algo y no permitirle que pulse "aceptar" con la caja vacía del alert, ni que pulse "cancelar".

let ingresar;

do {
    ingresar = prompt("Ingrese algo aquí");
    
} while (ingresar == null || ingresar == "")
alert("Ha ingresado : " + ingresar);

*/

//Crear un juego de adivinanzas de números en el que un usuario tiene que adivinar un número entre 1 y 10. Usaremos algún método matemático para generar un número aleatorio entre 1 y 10, luego pediremos al usuario que adivine el número. Si aciertan el juego termina. podemos obtener la entrada del usuario con el método prompt(), usaremos el ciclo do while para seguir solicitándole al usuario que adivine el número hasta que lo adivine correctamente:

// ceil() : redondea al numero superior.
// random(): establece un número aleatorio.

let numeroAleatorio = Math.ceil(Math.random()*10);
let numero = 0;

do {
    numero = parseInt(prompt("Ingrese un número entre 1 y 10 : "));
    if (numero == numeroAleatorio) {
        alert('El número adivinado es correcto');        
    } else {
        alert('El número es incorrecto inténtalo otra vez');        
    }
} while (numero != numeroAleatorio);

// Una empresa desea una aplicación para contabilizar la cantidad de dígitos repetidos dentro de una cadena de números ingresados. por ejemplo si tengo el siguiente número 4577657367321367112 y pido que el número a contabilizar sea el 7 entonces debo obtener  5 como valor resultante. la cifra indicada puede tener longitud diferente.
//desarrollar un programa que permita contar la cantidad total de dígitos.
//desarrollar un programa que permita contar la cantidad de números repetidos deacuerdo al dígito ingresado.