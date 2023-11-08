/* Aula 16 de JS Dado Virtual */

// SELECIONAR ELEMENTOS
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function() {
    // Adicionar a animacao
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // Tocar o efeito sonoro
    dadoRolando.play()

// Ocultar o botao Sortear
    btnSortear.style.display = 'none'

// Usar setTimeout para executar as acoes apos 1.75 segundos
    setTimeout(function() {

        // ARMAZENAR NUMERO SORTEADO NA VARIAVEL
        numeroSorteado = getRandomInt(1,6)

        // Escrever o numero sorteado no console
        console.log(numeroSorteado)

        // Definir atributo src com base no numero
        imgDado.setAttribute('src' , '../images/dado/'+numeroSorteado+'.png')
        // Escrever no paragrafo numeroSorteado
        sorteado.textContent = numeroSorteado
        
        // Exibir o botao Sortear
        btnSortear.style.display = 'inline-block'
        
        // Retirar a animacao
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750)

})

// FUNCAO que gera numero randomico inteiro
// Incluindo o minimo e o maximo
function getRandomInt(min, max) {
    min = Math.ceil(min)  // Arredonda para cima  ceil  = teto
    max = Math.floor(max) // Arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}