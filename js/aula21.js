/* Aula 20 Korian Animal Quiz */
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // Pontos para o placar
let placar = 0 // Placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a  = document.querySelector('#a')
let b  = document.querySelector('#b')
let c  = document.querySelector('#c')
let d  = document.querySelector('#d')

// Article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// OL LI com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "곰 em Coreano significa...",
    alternativaA : "Ovelha",
    alternativaB : "Cachorro",
    alternativaC : "Urso",
    alternativaD : "Esquilo",
    correta      : "Urso",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "고양이 em Coreano significa...",
    alternativaA : "Hipopótamo",
    alternativaB : "Girafa",
    alternativaC : "Peixe",
    alternativaD : "Gato",
    correta      : "Gato",
}    
const q3 = {
    numQuestao   : 3,
    pergunta     : "개 em Coreano significa...",
    alternativaA : "Cavalo",
    alternativaB : "Cachorro",
    alternativaC : "Girafa",
    alternativaD : "Esquilo",
    correta      : "Cachorro",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "하마 em Coreano significa...",
    alternativaA : "Esquilo",
    alternativaB : "Hipopótamo",
    alternativaC : "Alce",
    alternativaD : "Ovelha",
    correta      : "Hipopótamo",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "물고기 em Coreano significa...",
    alternativaA : "Peixe",
    alternativaB : "Esquilo",
    alternativaC : "Cavalo",
    alternativaD : "Ovelha",
    correta      : "Peixe",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "말 em Coreano significa...",
    alternativaA : "Passarinho",
    alternativaB : "Cavalo",
    alternativaC : "Leão",
    alternativaD : "Cabra",
    correta      : "Cavalo",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "사자 em Coreano significa...",
    alternativaA : "Leão",
    alternativaB : "Rinoceronte",
    alternativaC : "Boi",
    alternativaD : "Ovelha",
    correta      : "Leão",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "소 em Coreano significa...",
    alternativaA : "Polvo",
    alternativaB : "Zebra",
    alternativaC : "Macaco",
    alternativaD : "Boi",
    correta      : "Boi",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "문어 em Coreano significa...",
    alternativaA : "Coruja",
    alternativaB : "Girafa",
    alternativaC : "Polvo",
    alternativaD : "Jacaré",
    correta      : "Polvo",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "원숭이 em Coreano significa...",
    alternativaA : "Cabra",
    alternativaB : "Avestruz",
    alternativaC : "Onça",
    alternativaD : "Macaco",
    correta      : "Macaco",
}

// CONSTANTE COM UM ARRAY DE OBJETIVOS COM TODAS AS QUESTÕES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length) -1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1º QUESTÃO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1º QUESTÃO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PRÓXIMAS QUESTÕES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    // console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console,log('Duplo clique)
    pontos -= 10 // Tira 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}
function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta!"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);

    // Atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // Bloquear a escolha de opções
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {
    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTÃO
    articleQuestoes.style.display = 'none'
    
    setTimeout(function() {
        pontos = 0 // Zerar placar
        //location.reload()
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta.'
    }, 8000)
}