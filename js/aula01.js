/* 
arquivo js externo 
*/

document.write("Olá mundo")
console.log("Outro olá mundo!") // comentario
// alert("Olá mundo com Alerta")

/* CRIAR VARIÁVEIS e atribuir valores */
let mensagem = "Minha mensagem"
let mensagem2 = 'Outra mensagem'
let meuPeso = 66.5
let minhaAltura = 1.69
let minhaIdade = 30
let ehDoador = false
let teste = null

/* CRIAR CONSTANTES e atribuir valor */
const PI = 3.1415
const TAXA = 0.5

teste = "Algum conteúdo"

/* ESCREVER O CONTEUDO DE VARIÁVEIS e CONSTANTES */
document.write("<p> Mensagem: " + mensagem + "</p>")

document.write('Mensagem2: ${mensagem2}')

document.write("<p> Peso: " + meuPeso + "Kg </p>")

document.write('Altura: ${minhaAltura} m')

document.write("<p> Idade: " + minhaIdade + " anos</p>")

document.write('Doador? ${ehDoador}')

document.write("<p> Teste: " + teste + "</p>")

document.write("<p> PI " + PI + "</p>")

document.write("<p> TAXA " + TAXA + "</p>")
