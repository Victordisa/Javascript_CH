let edad= (prompt("Ingrese su edad: "))

if (edad == 18){
    alert("Puede ser asegurado sin descuento")
} else if (edad > 18 && edad <= 25){
    alert("Puede ser asegurado con un descuento de 25%")
}else if (edad > 25 && edad <= 35){
    alert("Puede ser asegurado con un descuento del 40%")
}else if (edad > 35 && edad <= 65) {
    alert("puede ser asegurado con un descuento del 50%")
}else{
    alert("No puede ser asegurado por nosotros")
}