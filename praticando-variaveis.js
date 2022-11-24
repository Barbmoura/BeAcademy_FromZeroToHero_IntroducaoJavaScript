// 1. Declare uma variável de nome person.
var person

// 2. Que tipo de dado é a variável acima?
console.log(typeof person)

/* 
3. Declare uma variável e atribua valores para cada um dos dados:
. name: string
. age: number (float)
. isAdmin: boolean
. isAMan: boolean
*/
var person = {
    name: "Moacir",
    age: 30,
    weight: 69,
    isAdmin: false,
    isAMan: true,
}

// 4. A variável human abaixo é de que tipo de dado?
console.log(typeof human)

// 4.1. Atribua a ela as mesmas propriedades e valores do exercício 3.
let human = {
    name: "Moacir",
    age: 30,
    weight: 69,
    isAdmin: false,
    isAMan: true,
}

// 4.2. Mostre no conseole a seguinte mensagem: O humano <name> tem o peso <weigth> kg.
console.log(`O humano ${human.name} tem o peso ${human.weight}`)

// 5. Declare uma variável do tipo Array de nome humans e atribua a ela nenhum valor, ou seja, somente o Array vazio.
let humans = [
    human
]

// 7. Coloque no console o valor da posição zero do Array acima
console.log(humans[0])

// 8. Crie um novo objeto human e coloque na posição 1 do Array humans.
let newHuman = {
    name: "Luan",
    age: 30,
    weight: 90,
    isAdmin: true,
    isAMan: true,
}
console.log(newHuman)

humans = [
    human,
    newHuman
]
console.log(humans)

// 9. Sem rodar 