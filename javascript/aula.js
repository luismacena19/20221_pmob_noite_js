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

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// arrow function
// notação dela:
// () => {}
// function filter (funcao){
//     funcao()
// }
const apenasA= nomes.filter((n) =>{
    return n.startsWith("A")
});
console.log(apenasA)