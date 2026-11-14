/**
 * Ejercicio 1 -- comprueba si una edad almacenada es una variable es mayor de edad, es decir, que su valor sea mayor de 18, si es asi imprime el texto eres mayor de edad, 
 * en caso contrario, imprime el texto no eres menor de edad
 * 
 */

let edad =number(promopt("ingrese su edad :"));
if(edad>=18){
    console.log("eres mayor de edad");
} else {
    console.log("no eres mayor de edad")
}



/**
 * Ejercicio 2 -- dada una nota almacenada en una variable, imprime su equivalente : 
 * +mayor o igual a cero, pero menor que 5, SUSPENSO 
 * +mayor o igual a 5 , pero menor que 6, SUFICIENTE  
 * +mayor o igual a 6, pero menor que 7 BIEN 
 * +mayor o igual a 7, pero menor que 9, NOTABLE 
 * +mayor o igual a 9 pero menor o igual a 10, SOBRESALIENTE
 * en cualquier otro caso imprimir el texto ,: NOTA NO VALIDA
 */

let nota = Number(prompt("Ingrese una nota:"));

if (nota >= 0 && nota < 5) {
    console.log("SUSPENSO");
} else if (nota >= 5 && nota < 6) {
    console.log("SUFICIENTE");
} else if (nota >= 6 && nota < 7) {
    console.log("BIEN");
} else if (nota >= 7 && nota < 9) {
    console.log("NOTABLE");
} else if (nota >= 9 && nota <= 10) {
    console.log("SOBRESALIENTE");
} else {
    console.log("NOTA NO VALIDA");
}

