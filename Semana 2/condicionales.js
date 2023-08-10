// Condicional
/*
Un programa condicional tiene lo siguiente:
- una condición puede ser True o False
- un bloque de programa se ejecuta cuando la condición es True.
- un bloque de programa se ejecuta cuando la condición es False.

Sintáxis

1.

if (condition) {
    //bloque o instrucciones de código
}

2.

if (condition) {
    //bloque o instrucciones de código    
} else {
    //bloque o instrucciones de código    
}
*/

// Escribir un programa que tome un número del usuario como entrada, si es entre 10 y 99 o ambos inclusive, entonces mostrará "dos digitos", de lo contrario se mostrará "no son dos dígitos"

// Prompt: permite el ingreso de datos por pantalla
// Parseint: es una función que convierte a entero.  
/*
let numeroIngresado = parseInt(prompt("Ingrese el número : "));

if (numeroIngresado >= 10 &&  numeroIngresado <= 99 ) {
    console.log("número de dos dígitos");    
} else {
    console.log("no son dos dígitos")    
}
*/
// Escribir un programa que tome un número de entrada y muestre la suma de sus dígitos. Asumimos que el usuario ingresará un número positivo de hasta cuatro dígitos.

// % : residuo
// / : cociente

let suma = 0;
let numero = parseInt(prompt('Ingrese el número : '));

if(numero > 0 && numero <10000){
    suma = suma + numero%10; //suma += numero % 10, agregando el residuo a la variable suma
    numero = parseInt(numero/10); // agregando el cociente al número 

    if (numero > 0){
        suma = suma + numero%10;
        numero = parseInt(numero/10);
    }

    if (numero > 0){
        suma = suma + numero%10;
        numero = parseInt(numero/10);
    }

    if (numero > 0){
        suma = suma + numero%10;
        numero = parseInt(numero/10);
    }
    
    console.log('la suma de los dígitos es : ' + suma);
}else{
    console.log('el número es inválido');
}

//Escribir un programa en el cual debe calcular el pago de un empleado en función de las horas trabajadas. la entrada incluye el total de horas trabajadas por semana del empleado y su tarifa de pago por hora. Al empleado se le pagará un salario base por las primeras 40 horas trabajadas y  tiempo extra( 150% del salario base)por cualquier hora despues de las 40 horas como pago de horas extras. mostrar el pago regular, el pago de horas extras y el pago total de la semana por pantalla, si el empleado trabajó menos de 40 horas, muestre resultado que no ha realizado ninguna hora extra  relacionado con el pago de horas extras.