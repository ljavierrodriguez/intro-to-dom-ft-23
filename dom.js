/* JS Document */
// referencia del navegador
window

// referencia del contenido del documento
document


/* metodos que me permiten acceder a 
los elementos dentro del documento */
/* 
document.getElementById(id) -- devuelve el elemento con el id indicado
document.getElementsByClassName(class) -- devuelve todos los elementos con las clase indicada
document.getElementsByTagName(etiqueta) -- devuelve todos los elementos segun la etiqueta indicada
document.getElementsByName(name) -- devuelve todos los elementos segun el nombre indicado 


document.querySelector(selector) -- devuelve el primer elemento con el selector indicado
document.querySelectorAll(selector) -- devuelve todos los elementos con el selector indicado

*/
/* 
metodos que me permiten crear nuevos elementos o contenido
dentro del documento
*/
/* 
document.createElement(elemento)
document.createTextNode(texto)
*/

/* Acceder el body */
/* document.body */
/* Añador nuevos elementos */
/* 
document.body.appendChild(elemento)
*/

let divUno = document.getElementById('divUno')
divUno.innerHTML = "<b>Hola Mundo</b>"
divUno.style.color = "blue";

let divDos = document.getElementsByClassName('divDos') // []
console.log(divDos)
divDos[1].innerHTML = "2 desde JS"

let divs = document.getElementsByTagName('div') // []
console.log(divs)

let genero = document.getElementsByName('genero');
console.log(genero)



let div1 = document.querySelector('#divUno')
div1.innerHTML = "<strong>Hello World</strong>"


let div2 = document.querySelectorAll('.divDos')
console.log(div2)

/* 
div2.forEach((div) => {
    console.log(div)
}) 
*/

let divs2 = document.querySelectorAll('div')

let genero2 = document.querySelectorAll("input[name=genero]")

let p = document.querySelector("#home .header p")


let div = document.createElement('div')
let text = document.createTextNode("hola mundo creado")
div.id = "textHeader"
//div.innerHTML = "Hola Mundo Creado"
div.appendChild(text)

document.body.appendChild(div)

let elementoAClonar = document.querySelector("#home")
let nuevoElementoClonado = elementoAClonar.cloneNode(true)

document.body.appendChild(nuevoElementoClonado)

let pDel = document.querySelector("#home .header p")
console.log(pDel)
//pDel.parentNode.removeChild(pDel)

let padre = document.querySelector("#home .header")
padre.removeChild(pDel)

let img = document.querySelector('img')
img.src = "https://picsum.photos/id/666/300/300"


let ul = document.querySelector('ul');

console.log(ul.childNodes)


let test = document.querySelector('.test');
console.log(test.childNodes)

console.log(test.children)