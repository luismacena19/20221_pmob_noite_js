//console.log("aa");
//
//const cosnti = "constante";
//var bi = "n use, n possui escopo"
//let ba = "use, tem escopo"
//
//const nome = "Jose"
//const idade = 27
//nome = "Maria"
//const a2
//
//let a = 2
//let b = 'abc'
//let endereco = `Rua K, 12`
//
//var linguagem = "Javascript"
//console.log("Aprendendo, " + linguagem)
//var linguagem = "Java"
//console.log("Aprendendo, " + linguagem)

//var idade = 18
//console.log("Oi, " + nome)
//if(idade >= 18){
//    // içamento ou hoist Quando var nome vai pra fora do bloco
//    var nome = "João"
//    //console.log("Parabens, " + nome + ". Voce já pode dirigir.")
//    console.log(`Parabens, ${nome}. Voce já pode dirigir.`)
//}
//console.log("Até mais, " + nome + ".")

// //coerção implicita
// const n1 = 2
// const n2 ='3'
// const n3 = n1 + n2
// console.log(n3)
// //coreção explicita
// const n4 = n1 + Number(n2)
// //const n4 = n1 + +n2
// console.log(n4)

//operador de igualdade ==(Faz coerção) e ===(Não faz coerção, ele primeiro faz a comparação de tipo)
// console.log(1 == 1)
// console.log(1 == '1')
// console.log(1 === '1')
// console.log(true == 1)
// console.log(1 == [1])
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// const a = []
// const b = a
// console.log(a == b)

// const nome = ""
// console.log(!!nome)
// console.log(nome !== "")
// const nome2 = "Lulu"
// console.log(!!nome2)
// console.log('b' + 'a' + + 'a' + 'a')

// v1 = []
// console.log(v1.length)


// v1[0] = 3.4
// v1[10] = 2
// v1[2] = true
// console.log(v1.length)

// for (let i = 0; i< v1.length; i++){
//     console.log(v1[i])
// }

// v1.forEach((a) => console.log(a))
// const numeros = [1,2]
// numeros[0] = 2
// console.log(numeros)    

// const numeros = [1,2]
// console.log(numeros.length)    
// numeros[4] = 2
// console.log(numeros.length)    

//const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// arrow function
// notação dela:
// () => {}
// function filter (funcao){
//     funcao()
// }
// const apenasA= nomes.filter((n) =>{
//     return n.startsWith("A")
// });
// console.log(apenasA)

// var vencedores = [
//     {
//         nome : "Equipe Super",
//         pais : "Brasil"
//     },
//     {
//         nome : "Time Maximo",
//         pais : "EUA"
//     },
//     {
//         nome : "Mega Grupo",
//         pais : "Canadá"
//     }
//  ];
 
//  var podioPorPais = vencedores.map(function(item, indice){
//     return item.pais;
//  });
 
// console.log(podioPorPais);
/////
//IO-Bound sequencia de op com entrada e saida de dados. Executa de forma paralela apesar de js operar de forma sequencial
//CPU-Bound sequencia de op que utiliza a cpu como contas

//IO-Bound - processamento assincrono(assincrona, não bloqueante)
// esses funcs chamando outros são chamados de hell, callback hell
// const fs = require ('fs') // import
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if (erro){
//             console.log('Erro: ' + erro)
//         }
//         else{
//             console.log("OK: " + conteudo.toString())
//             const dobro = +conteudo.toString() * 2
//             console.log("Valor calculado: " + dobro)
//             const finalizar = function (erro){
//                 if (erro)
//                     console.log("Erro: " + erro)
//                 else
//                     console.log("OK, escreveu")           
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
        
//     }

//     //segundo parâmetro: funcção callback

//     fs.readFile('arquivo.txt',exibirConteudo) 
//     console.log("outra coisa")
// }

// abrirArquivo('arquivo.txt')

// solução são as promises(é objeto, da ec6 de 2015)
// é um objeto que tem a ele associado um fluxo de execuções
//// paralelismo são necessariamente IO-Bound
// uma promise pode ser pending, fullfilled ou rejected
// // sem promise:
// const devolveUm (){
//     return 1
// }
// const resultado = devolveUm()
// console.log(resultado)


// usando o promise
// function devolveUm (){
//     let p = new Promise((resolve, reject) =>{
//         resolve(1)
//     })
//     return p
// }
// const resultado = devolveUm()
// resultado.then((res) => console.log(res))

//1 + 2 + ... + n
// const calculoDemorado = (n) => {
//     let p = new Promise ((resolve, reject) => {
//         if (n < 0)
//             reject('Não use números regativos')
//         else{
//         let res = 0
//         for (let i = 1; i <= n; i++)
//             res += i
//         resolve(res)
//     }
// })
//     return p
// }
// // // posso:
// // const r = calculoDemorado(10)
// // r.then()
// calculoDemorado(-10)
// .then ((res) => {console.log (res)})
// .catch((erro) => {console.log("Erro: " +erro)})
// promise sempre nasce com estado pending
// podemos criar um promise com outro estado

// const calculoRapido = (n) => {
//     return Promise.resolve((n * (n + 1)) / 2)
// }
// calculoRapido(10).then((res) => console.log (res))

// exec 3min
// a mesma coisa que a calculoRapidinho faz sem usar "Promise.resove"

// ////minha
// const f = (n) => {
//     return new Promise((resolve, reject) => {
//         n * (n + 1) / 2
//     })
// }
// f(10).then((res) => console.log(res))

//// prof
const f = (n) => {
    return new Promise ((resolve,reject) => {
        resolve((n * (n +1)) / 2)
    })
} 
f(10).then((res) => console.log(res))
