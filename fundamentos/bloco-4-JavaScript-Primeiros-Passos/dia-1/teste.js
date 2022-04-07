const a = 9845
const b = 8978
// adição
console.log(a + b)

// subtração
console.log(a - b)

// multiplicação
console.log(a * b)

// divisão
console.log (a / b)

// módulo
console.log (a % b)

// separando
console.log ("      ")
// separando

// Programa para retornar o maior numero
const n1 = 1235643
const n2 = 9102810


if(n1 > n2){
    console.log(n1 + " é maior q " + n2)
}
else if (n2 > n1){
    console.log (n2 + " é maior q " + n1)
}
// separando
console.log ("      ")
// separando

// Programa para retornar o maior de 3 numeros
const no1 = 390847892710
const no2 = 1927389173091
const no3 = 6841844644158
if(no1 > no2 && no1 >  no3){
    console.log (no1 + " é o maior número")
}
else if (no2 > no1 && no2 > no3){
    console.log (no2 + " é o maior número")
}
else if (no3 > no1 && no3 > no2){
    console.log (no3 + " é o maior número")
}
else {
    console.log ("erro")
}
// separando
console.log ("      ")
// separando

// Reconhecedor de valor
const val = -190
if (val < 0){
    console.log (val + " é negativo")
}
else if (val > 0){
    console.log (val + " é positivo")
}
else if (val = 0){
    console.log (val + " é zero")
}
// separando
console.log ("      ")
// separando

// Triângulo
const ang1 = 60
const ang2 = 40
const ang3 = 80

switch(ang1 + ang2 + ang3 == 180){
    case true:
        console.log ("É um triângulo")
        break
    case false:
        console.log ("Não é um triângulo")
}