let nivel1 = "Desarrollo web"
let nivel2 = "JS"
let nivel3 = "React"
let nivel4 = "Backend" 

//asi ocupa mucho espacio es mejor un array.

//declarativas, existen 6 combinaciones.

const listaDeCursos = ["Desarrolloweb", "JS", "react", "Backend"]

const numerosDeDNI = [1323123, 131323213, 123123213]

const datosRandom = ["Hola", 25, false]

/*la idea es enlistar variables dentro de una mega lista. */

/* los array tienen el indice, todo lo que esta
dentro del array se conoce como */

/* para preguntar por una posicion especifica. */

console.log(listaDeCursos[2])

listaDeCursos[3] = "Angular" /*cambiamos la posicion 3 por angular. */

//podemos declarar arrays vacios.

const arrayVacio = []; //si ponemos const hay que asignar valor y es constante.

const diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

//mejor forma de recorrer un array es usando a for.

for (let index = 0; index < diasDeLaSemana.length; index++) {
    const element = diasDeLaSemana[index];
    console.log(element)
}

//propiedades
//metodos
//funciones
//constructores

//Propiedades y metodos.

//length -> que nos sirve para leer la longitud.

let nombre = "Carolina"
console.log(nombre.length)

//metodos
//sintaxis .elnombre()

//funciones 
//sintaxis elnombre()

//como le pregunto al array su longitud.

console.log(diasDeLaSemana.length)

//metodos
//sintaxis .elnombre()

//metodo .push()
//agrega valores a la ultima posicion del array 

diasDeLaSemana.push("Sabado", "Domingo") 

//metodo .unshift() coloca la informacion a la primera posicion.
//se considera mala practica por manipular los primeros datos del array
diasDeLaSemana.unshift("Domingo") 

console.log(diasDeLaSemana)

//.shift() sirve para eliminar el primer elemento del array.

//.pop() sirve para eliminar el ultimo elemento del array

diasDeLaSemana.pop()

console.log(diasDeLaSemana)

diasDeLaSemana.push("Domingo")



