/* Aula 10 Funções ou Métodos no JS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

/* Funções sem parâmetros e sem retorno(procedure) */
function olaMundo() {
    document.write('Olá Mundo sem retorno<br>')
}

/* Funções sem parâmetros e com retorno(function) */
function olaMundo2() {
    return 'Olá Mundo com retorno<br>'
}

// CHAMAR A FUNÇÂO = executar ela
olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador.'

/* Funções com parâmetros e sem retorno(procedure) */
function somar(a, b) {
    document.write((a + b) + "<br>")
}

/* Funções com parâmetro e com retorno(function) */
function somar2(c, d) {
    return c + d
}

// CHAMAR A FUNÇÂO = executar ela
somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 2)}</p>`)

/* função anonima = não tem nome
pode ou não ter parâmetros
pode ou não ter retorno
*/
titulo.addEventListener(`click`, function () {
    console.log('Clicou no título')
})

/* Arrow function E56 2015 em diante */

const olaMundoArrow = () => document.write("Olá mundo!!!!!!!!")

// não precisa usar a palavra function
// não precisa usar a palavra return
// não se usa nome na função
// não precisa colocar { } se for só uma instrução
const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p>'

olaMundoArrow()
document.write(olaMundo2Arrow())