//Clase 2------------------------------------------------------------------------
//operadores aritmeticos

//parseInt --> quiere crear enteros
//parseFloat --> quiere crear flotantes

//n1 = parseInt(prompt ("Ingrese un numero: "))
//n2 = parseInt(prompt ("Ingrese un numero: "))

//n1 = parseFloat(prompt ("Ingrese un numero: "))
//n2 = parseFloat(prompt ("Ingrese un numero: "))

//number: con esto  podemos poner cualquier tipo de numero como variable

//n1 = Number(prompt ("Ingrese un numero: "))
//n2 = Number(prompt ("Ingrese un numero: "))

//resultado = n1+n2;
//alert(resultad)

//operadores de asignacion incremento y decremento

//let vidas = 3;

/*console.log(vidas)
vidas = vidas+1;
vidas++; o vidas--;
console.log(vidas)
vidas+=5; forma mas corta de sumar valor a uno ya existente*/

//operadores logicos.

/* nos dan como resultado true o false, and o or. */

let TengoHambre= true;
let TengoComida= false;

let como = TengoHambre && TengoComida;

console.log(como)

// or || 

let voyEnCarro= true;
let VoyEnBus= false;

let comoVoy = voyEnCarro || VoyEnBus;

console.log(comoVoy)

//negacion not con !

let meGustaEstudiar = !true;

console.log(meGustaEstudiar)

//operadores de comparacion.

// let mail = "victor@gmail.com" variable string

let n1, n2, result;

n1 = 5;
n2 = 4;

result = n1 > n2;

console.log(result)

result = n1 === n2;

console.log(result)

// condionales------

if (condicion){
    //Si no es verdadero no se ejecuto el codigo
}

/*if (true){
    alert("la condicion es verdadera")
}

if.... else

if(){
    
}else{

}*/

let edad = number(prompt("Ingresa tu edad: "))

if(number >= 18){
    alert("usted es mayor de edad")
}else{
    alert("Eres menor de edad")
}

//if anidado 

let sueldo = 100

if (sueldo <= 20){
    alert("No puedo acceder al prestamo")
}else if (sueldo <= 50) {
    alert("puede acceder a un 20% del prestamo")
}else if (sueldo <= 70){
    alert("Puede acceder al 60% del prestamo")
}else if(sueldo >= 90){
    alert("puede acceder al 100% del prestamo")
}else {
    condicion("No puede acceder a prestamo") 
}
