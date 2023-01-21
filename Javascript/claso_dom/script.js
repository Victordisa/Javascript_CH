//console.log(document.body)

//tipos de nodos.

//document -> nodo raiz
//etiquetas -> Element (atributos, otros nodos)
//ul id="lista de compras" li comprar papa /li /ul
//attr -> este nodo se define cada atributo de la etiqueta atributo = valor
//<a href="dsfsdfsdf"> src: "ruta"
//comentarios - representan la estructura del codigo de html 
//acceder a los nodos js vanilla nos da 3 tipos de metodos 
//acceder por ID 

//la buena practica de JS guardar toda la info en una variable.

let listaMenu = document.getElementById("menu")
console.log(listaMenu)

let liMenu = document.getElementsByClassName("lista")
console.log(liMenu)

/*for(const datos of liMenu){
    console.log(datos)
}*/
console.log(liMenu[2])

//acceder por el nombre de la etiqueta

let parrafo = document.getElementsByTagName("p")
console.log(parrafo)


//insertar contenido al html desde js innertext
let titulo = document.getElementById("valores")

titulo.innerText = "hola soy un texto insertado desde js"

console.log(liMenu.innerText)

listaMenu.style.backgroundColor = "#000"

let titulo = document.createElement("h3")

//paso 2 le insertamos el contenido de html interno

titulo.innerHTML = "hola soy un titulo"

//avisarle (añadir) el nodo element como hijo body
// .append ("agregar") .appendChild() 
document.body.appendChild(titulo)

let padreFruta = document.getElementById("frutas")
//creo array con frutas.

let frutas = ["Pera", "banana", "Naranja", "Frutillas"]

for (const frta of frutas) {
    //creamos el nodo li
    let li = document.createElement("li")
    //le decimos que lleva adentro
    li.innerHTML = frta
    //avisar al padre.
    padrerFruta.appendChild(li)
    
}

//2da pre entrega montar una funcion que sume los precios totales de los planes elegidos por el comprador.