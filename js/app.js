/**
 * Ejercicio 1 -- comprueba si una edad almacenada es una variable es mayor de edad, es decir, que su valor sea mayor de 18, si es asi imprime el texto eres mayor de edad, 
 * en caso contrario, imprime el texto no eres menor de edad
 * 
 */

let edad =Number(prompt("ingrese su edad: "));
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

/**
 * Ejercicio 3 -- Existen dos variables una con nombre y otra con un apellido. 
 * primero se ha de comprobar el nombre, si es igual a Daniel , 
 * se comprueba el apellido si es igual a ramos , 
 * se imprime por pantalla el texto nombre y apellido completos. 
 * en caso de que el nombre sea daniel , 
 * pero el apellido no sea ramos , se imprime por pantalla el texto apellido incorrecto. 
 * en caso de que el nombre no sea daniel , se imprime en pantalla el texto usuario desconocido
 */

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido:");
if (nombre == "Daniel") {
    if (apellido == "Ramos") {
        console.log("Daniel Ramos");
    } else {
        console.log("Apellido incorrecto");
    }
} else {
    console.log("usuario desconocido");
}

/**
 * ejercicio 4 -- Dada una lista con diferentes notas,
 *  se debe imprimir la mas baja y la mas alta,
 * notas = [4.5,9,3.2,1.5,6.4,7.2]
 * 
 */
let notas = [4.5, 9, 3.2, 1.5, 6.4, 7.2];
let Baja =notas[0];
let Alta =notas[0];
for (let i=0; i<6; i++){
    if(notas[i]<Baja){
        Baja=notas[i];
    }
    if(notas[i]>Alta){
        Alta=notas[i];
    }
}
console.log("La nota mas baja es: " +Baja);
console.log("La nota mayor es: "+Alta);