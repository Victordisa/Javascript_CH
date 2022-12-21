for(let i=0; i<10; i++){
    alert(i);
}
for (let i=1; i<=10; i++){
    alert(i);
}
//tabla de multiplicar.

let ingresarnumero=parseInt(prompt("ingresar numero"));

for(let i=1; i<=10; i++){
    let resultado = ingresarnumero*i;
    alert(ingresarnumero +"x" + i +"=" + resultado);
}

//algoritmo para dar turno a clientes.

for (let i=1; i <= 20; i++){
    let ingresarnombre = prompt("Ingresar nombre");
    alert(" Turno numero"+i+"Nombre: "+ ingresarnombre);
}
//sentencia break
for(let i= 1; i<=10; i++){
    if(i==5){
        break;
    }
    alert(i);
}

for (let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    alert(i);
}

//sentencia while.

let repetir=true;
while(repetir){
    console.log("imprime en pantalla");
}

let entrada=prompt("Ingresa un dato");
while(entrada!="ESC"){
    alert("El usuario ingreso" + entrada);
    entrada=prompt("ingrese otro dato");
}
//sentencia do... while

let repetir1=false;
do{
    console.log("Solo una vez");
}while(repetir)

let numero=0;
do{
    numero=prompt("ingresar numero");
    console.log(numero);
}while(parseInt(numero));

//sentencia switch

switch(numero){
    case 5:
        //...
        break;
    case 8:
        //...
        break;
    case 20:
        //...
        break;
    default: //funciona como un else.
        //...
        break;
}

//aplicando el while y el switch

let entrada1 = prompt("ingresar un nombre");
while(entrada1 != "ESC"){
    switch(entrada){
        case "Ana":
            alert("hola Ana");
            break;
        case "Juan":
            alert("hola Juan");
            break;
        default:
            alert("Quien eres?");
            break;
    }
    entrada1=prompt("Ingresa un nombre");
}

