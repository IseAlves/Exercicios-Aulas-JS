/* Arquivo JS aula 08 Dom */

//DOM = Document Objet Model
// Arvore com elementos desde o Browser, a Janela do Browser, o Documento e cada elemento html que formam os conteudos.
/*
navegador
window
location
document -> html -> head e body
history
*/

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois
// chamar um método(função) para
// selecionar ele, seus dados, trazer informações, etc

// ,querySelector()
// selecionar elemento com base na tag, #id ou .class
let titulo = document.querySelector('#titulo')
//console.log(titulo)

// .textContent
// propriedade ou atributo textContent
// serve para acessar ou alterar conteúdo
// de um elemento ue foi selecionado
//console.log(titulo.textContent)
//console,log(titulo.innerHTML)

titulo.textContent = 'DOM'
//console.log(titulo.textContent)

// .querySelectorAll()
// selecionar todos elementos com ase na tag, #id ou .class
let testando = document.querySelectorAll('.box')
//console.log(testando)
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
//testando[0].textContent = 'texto qualquer'

// Existem também os métodos
// MAS, PREFIRA USAR O .querySelector()
/*
.getElementsByTagName()
.getElementById()
.getElementsByClassName()
*/

let testeTag = document.getElementsByTagName('div')
//console.log(testeTag)
//document.write(testeTag[0].textContent)
//document.write(testeTag[1].textContent)

let teteID = document.getElementById('titulo')
//console.log(testandoId)

let testeClass = document.getElementsByClassName('box')
//console.log(testeClass)
//document.write(testeClass[0].textContent)
//document.write(testeClass[1].textContent)
