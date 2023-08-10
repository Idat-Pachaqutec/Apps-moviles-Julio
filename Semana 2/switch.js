//Estructura Switch

//Sintáxis
/*
switch (condition) {
    case value:
        
        break;

    default:
        break;
}
*/
//Escribir una calculadora simple

let result;
let operator = prompt('Ingrese el operador (+ , - , * , /)');

let numero1 = parseInt(prompt('Ingrese el primer número : '));
let numero2 = parseInt(prompt('Ingrese el segundo número : '));

switch (operator) {
    case '+':
        result = numero1 + numero2;
        alert("la suma de los números es: " + result);
        //alert(`${numero1} + ${numero2} = ${result}`); //interpolación de strings
        break;
    
    case '-':
        result = numero1 - numero2;
        alert(`${numero1} - ${numero2} = ${result}`); //interpolación de strings
        break;

    default:
        alert('operator invalid')
        break;
}

//Escribir un programa que solicite al usuario que ingrese un número del uno al diez(el usuario debe ingresar en cifras) y lo muestre escrito en letras, adicional si ingresa un número fuera del rango establecido le muestre un mensaje enviándole un error.