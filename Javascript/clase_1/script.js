console.log("Hello world")

// como declaramos las variables

//palabra reservadas
//ES5

//var nombre = "Victor";

//ES6

//let apellido = "Di Salvatore";

//declaro el valor (dato)

//case sencitive --> camelcase
//no esta permitido guion medio, es mala practica empezar con mayuscula.

let anioDeCumpleanio;
//sin asignarle valor

//String = "cadenadecaracteres"
//Number = 1234
//Boolean = true o false

//inicializar las variables

// podemos declarar una variable y asignarle un valor inicial 

//let nombre, apellido, edad, telefono, TipoDeSangre, nacimiento;

/*nombre= "carlos"
apellido="Perez"
edad = 29
telefono= 12345435
TipoDeSangre= "B"
nacimiento=1993
const cuil="27-1234-23"*/

//estamos reasignando valor

//dato constante como el ID de SQL, y estamos obligados a asignarle valor
/*con const no puede estar previamente declarado, 
debe recibir una unica asignacion*/

//const dni = 111111; 

//valores de entrada y salida

//Esto es un print

/*console.log(dni)
console.log(nombre)
console.log(apellido)*/

//imprimir todo en una misma consola, concatenar

/*console.log("Mi nombre es " + nombre + " Mi apellido es " + apellido + 
" Mi dni es " + dni)*/

//otro ejemplo de salida llamado alerta

/*alert("Mi nombre es " + nombre + " Mi apellido es " + apellido + 
" Mi dni es " + dni)*/

//ingresar datos

//prompt("Nos deja ingresar informacion a partir de un input") 

let nombre = prompt("Ingresa tu nombre: ")

console.log("El nombre ingresado es: " + nombre)

let apellido = prompt("Ingresa tu apellido")

alert(nombre + " y " + apellido)

let numero1 = prompt("ingresa el primer valor a sumar: ")
let numero2 = prompt("ingresa el segundo valor a sumar: ")

//tenemos que guardar todo el tiempo los datos
let resultado = numero1+numero2
alert(resultado)

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
