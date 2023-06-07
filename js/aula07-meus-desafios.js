/* Desafio 01 */
let lutador = 'Fedor Vladimirovich Emelianenko'
let nacionalidade = 'Russo'
let idade = 46
let peso = 106
let altura = 1.83

document.write(`<div class="card">
                <h2>Lutador</h2>
                <img src="./images/fedor-vladimirovich.jpg">
                <p>Lutador: ${lutador} </p>
                <p>Nacionalidade: ${nacionalidade} </p>
                <p>Idade: ${idade} anos </p>
                <p>Peso: ${peso} Kg </p>
                <p>Altura: ${altura} m </p>
                </div>
            `)

/* Desafio 02 */
const dia = 06
const mes = 06
const ano = 2023
const FraseDoDia = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade."
const Autoria = "Aaron Swartz"

document.write(`<div class="citacao">
                <h2>Frase do Dia</h2>
                <h3>Hoje é 0${dia}/0${mes}/${ano}</h3>
                <blockquote>&#10077;${FraseDoDia}&#10078;</blockquote>
                <p>${Autoria}</p>
                </div>
               `)

/* Desafio 03 */
let mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

document.write(`<div class="meses">
                <h2>Array de Meses do Ano</h2>
                <p>${mesesDoAno[0]}, ${mesesDoAno[1]}, ${mesesDoAno[2]}, ${mesesDoAno[3]}, ${mesesDoAno[4]}, ${mesesDoAno[5]}, ${mesesDoAno[6]}, ${mesesDoAno[7]}, ${mesesDoAno[8]}, ${mesesDoAno[9]}, ${mesesDoAno[10]}, ${mesesDoAno[11]} </p>
                </div>
              `)

/* Desafio 04 */
let jogo = {
    titulo : 'League Of Legends - LOL',
    desenvolvedor : 'Riot Games',
    anoLancamento : 2009
}

document.write(`<div class="jogo">
                <h2>Jogo</h2>
                <span>Título</span>
                <p>${jogo.titulo}</p>
                <span>Desenvolvedor</span>
                <p>${jogo.desenvolvedor}</p>
                <span>Ano do Lançamento</span>
                <p>${jogo.anoLancamento}</p>
                </div>
              `)