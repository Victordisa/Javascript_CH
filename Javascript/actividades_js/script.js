/*let nombre, apellido, edad;
const ciudad1= caracas;
const ciudad2= Madrid;
const ciudad3= Roma;
const ciudad4= BuenosAires;
const ciudad5= Lisboa;*/

//carnet de conducir.

/*let NumeroCarnet, Nombre, Apellido, FechaNacimiento, sexo, ColorOjos, Peso, Estatura;

NumeroCarnet= " B-324234 ";
Nombre= " Victor ";
Apellido= " DiSalvatore ";
FechaNacimiento= " 02-05-1988 ";
sexo= " M ";
ColorOjos=" Marrones ";
Peso=" 85kg ";
Estatura= " 182 ";

Carnet =  NumeroCarnet +  Nombre  +  Apellido  +  FechaNacimiento  +  sexo  +  Peso  +  Estatura;

console.log(Carnet); */

/*Familiar1= (prompt("Ingrese familiar 1: "));
Familiar2= (prompt("Ingrese familiar 2: "));
Familiar3= (prompt("Ingrese familiar 3: "));
Familiar4= (prompt("Ingrese familiar 4: "));
Familiar5= (prompt("Ingrese familiar 5: "));

Familiares= Familiar1 + Familiar2 + Familiar3 + Familiar4 + Familiar5;

alert(Familiares);*/


/*let Precio1 = parseFloat(prompt("Ingrese 1 precio: "));
let Precio2 = parseFloat(prompt("Ingrese otro precio: "));

let DescuentoPrecio1= Precio1 * 0.20;
let PrecioFinal1= Precio1-DescuentoPrecio1;
let DescuentoPrecio2= Precio2 * 0.30;
let PrecioFinal2= Precio2-DescuentoPrecio2;

console.log("Se le ha hecho un descuento de 20% al primer precio, su precio final es: " + PrecioFinal1);
console.log("Se le ha hecho un descuento de 30% al primer precio, su precio final es: " + PrecioFinal2);*/

//Actividad 1.

/*let Nombre = prompt("Ingresar un nombre: "); //siempre trabajar con let.
let Nombre1 = "Victor";

if(Nombre == Nombre1){
    alert("Fui yo");
}else{
    alert("Yo no fui");
}*/

/*let tecla = prompt("Presione una letra cualquiera: ");

if(tecla == "y" || tecla=="Y"){
    alert("Correcto");
}else{
    alert("Error");
}*/

/*let numero = parseInt(prompt("Ingresar un numero del 1 al 4: "))
if(numero==1){
    alert("Elegiste a Homero");
}else if(numero==2){
    alert("Elegiste a Marge");
}else if(numero==3){
    alert("Elegiste a Bart");
}else if(numero==4){
    alert("Elegiste a Lisa");
}else{ 
    alert("No elegiste a nadie");
}*/

/* let numero = parseInt(prompt("Ingresar un numero: "));

if(numero >= 0 && numero <= 100){
    alert("Presupuesto bajo");
}else if(numero>100 && numero<= 200){
    alert("Presupuesto medio");
}else if(numero > 200){
    alert("Presupuesto alto");
}*/

/*let producto1= prompt("ingrese un producto: ");
let producto2= prompt("ingrese otro producto: ");
let producto3= prompt("ingrese otr producto: ");
let producto4= prompt("ingrese otro producto: ");

if(producto1=="" || producto2=="" || producto3=="" || producto4=="" ){
    alert("Error es necesario cargar todos los productos");
}else{
    alert("Productos cargados");
}*/

//Actividad 1. 

/*let numero = prompt("Ingrese un numero: ");
let palabra = prompt("Ingrese una palabra: ");

for(let i = 0; i < numero; i++){
    console.log(palabra);
}*/

/*let numero= prompt("Ingrese un numero: ");

for(i= 0; i < numero; i++){
    if(i > 4){
        break;
    }else{
        console.log("Lado");
    }
    
}*/

/*let alumno=" ";
for(i=0; i<10; i++){
    alumno += prompt("ingrese el nombre de un alumno: ")+ "\n";  //la n es para saltar una linea. 
}
alert(alumno);*/

/*nombre = prompt("Ingrese un nombre: ");
let ingresados=" ";
while(nombre != "voldemort"){
    ingresados+=nombre +"\n";
    nombre = prompt("ingresa otro nombre: ");
    
}
alert(ingresados);*/


let numero = prompt("Ingrese un numero: ");
while(numero!="ESC"){
    switch(numero){
        case "1":
            alert("Es un tomate");
            break;
        case "2":
            alert("Es una Papa");
            break;
        case "3":
            alert("Es Carne");
            break;
        case "4":
            alert("Es Pollo");
            break;
        default: 
            alert("No estas en la lista");
            break;
    }
    numero = prompt("Ingrese un numero: ");
}




    


















