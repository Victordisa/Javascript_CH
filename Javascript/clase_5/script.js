//bucles infinitos menos si le damos un corte.

//iteracion

/*condicion -> 
while (condicion sea true){
    ejecuta la accion
}*/

/*let n=0
let x = 0
while(n<5){
    n++
    x+=n
    console.log("cortar cuando llegue a 5")
    console.log("Valor de x" + x)
}*/

/*for(let i=0; i<=10; i++){
    console.log("corro en 10" + i)
}*/

//funciones.

//funcion clasica

// function name(parametros){
    //sentencia
//}

/*function sumar() {
    alert("Hola soy una funcion")
}*/

//no correra hasta que la llamemos.
//sumar();


//con la fucion saludar podemos repetirla cuantas veces queramos llamandola.

/*function saludar() {
    let usuario= prompt("ingresa tu nombre: ");
    alert("el nombre del usuario es: " + usuario);
    
}
saludar();
saludar();
saludar();
saludar();*/

//funcion flecha
/*let resultado=0;
function sumar(n1, n2) {
    n1= number(prompt("ingresa el primer valor a sumar: "));
    n2= number(prompt("ingresa el segundo valor a sumar: "));
    resultado= n1 + n2;
    console.log(resultado);
    return resultado; // sirve para lo mismo que console.log
}

sumar(); //Tambien podemos darle parametros dentro del parentesis.*/

//return -> devuelve valor definido por la funcion.

/*function calculadora(primernum, segnum, operador) {
    switch(operador){
        case "+":
            return primernum + segnum;
        case "-":
            return primernum - segnum;
        case "/":
            return primernum / segnum;
        case "*":
            return primernum * segnum;
        default:
            return 0;
    }
}

let n1= number(prompt("ingresa el primer valor a sumar: "));
let n2= number(prompt("ingresa el segundo valor a sumar: "));
let operador= prompt("ingresa el operador: ");

alert(calculadora(n1, n2, operador));*/

//scope de donde viene la variable -- restringir su alcance y uso.

//en js 2 ambitos uno es global y el segundo local 

/*function sumar(n1, n2) {
    let resultado=0;
    resultado=n1+n2
    return resultado;
    
}

console.log(sumar(6,6))

//parametros por defecto

function resta(n1=0, n2=0) {
    let resultado= n1-n2;
    return resultado;
}*/

console.log(resta(15)) //si no agregamos un parametro nos arrojara Nan, 
//tenemos que agregar parametros por defecto.

// ES6 funcion flecha.

//funciones anonimas.

/*const suma = function() {
}

suma()

const sumar = 12;

sumar()*/

/*const suma=(n1, n2) => {return n1+n2}
let n1= number(prompt("ingresa el primer valor a sumar: "));
let n2= number(prompt("ingresa el segundo valor a sumar: "));
console.log(suma(4,9))*/

/*const saludo=(nombre) => {return "Hola me llamo" + nombre}

console.log(saludo(prompt("Ingresa tu nombre: ")))*/

//Si usamos un solo parametro puedo suprimir parentesis de variable nombre, las llaves y el return.



















