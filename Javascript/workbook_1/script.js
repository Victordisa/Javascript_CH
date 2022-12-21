
/*const usuario="victor";
const contraseña="1234"; 
let intentos=3;
for( let i= 0; i<3; i++){
    let user= prompt ("Ingrese su nombre de usuario:");
    let password= prompt ("Ingrese su contraseña:");
    if(usuario==user && contraseña==password){
        alert("bienvenido a su area privada");
        break;
    }
        alert("El usuario y/o contraseña son incorrectos, te quedan "+ intentos + " intentos");
    intentos--;
}*/

const usuario="victor";
const contraseña="1234"; 
let intentos=3;
for( let i= 0; i<3; i++){
    let user= prompt ("Ingrese su nombre de usuario:");
    let password= prompt ("Ingrese su contraseña:");
    while(usuario==user && contraseña==password){
        alert("bienvenido a su area privada");
    }
        alert("El usuario y/o contraseña son incorrectos, te quedan "+ intentos + " intentos");
    intentos--;
}



    
