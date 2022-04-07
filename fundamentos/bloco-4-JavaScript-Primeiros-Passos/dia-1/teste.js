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
// separando
console.log ("      ")
// separando

// ligeiramente confuso com esse, voltarei mais tarde
let peca = ("Cavalo")
console.log("faz o L")

// separando
console.log ("      ")
// separando

//Porcentagem
const nots = 2112
if (nots >= 90 && nots < 100){
    console.log ("A")
}
else if ( nots >= 80 && nots < 90){
    console.log ("B")
}
else if (nots >= 70 && nots < 80){
    console.log ("C")
}
else if (nots >= 60 && nots < 70){
    console.log ("D")
}
else if (nots >= 50 && nots < 60){
    console.log ("E")
}
else if (nots < 50){
    console.log ("F")
}
else if (nots > 100 || nots < 0){
    console.log ("Erro")
}

// separando
console.log ("      ")
// separando

// Parolimpa
const nu1 = 212
const nu2 = 398
const nu3 = 93
if(nu1 % 2 == 0 || nu2 % 2 == 0 || nu3 % 2 == 0){
    console.log (true)
}
else{
    console.log (false)
}

// separando
console.log ("      ")
// separando

// Parolimpa

if(nu1 % 2 == 0 || nu2 % 2 == 0 || nu3 % 2 == 0){
    console.log (false)
}
else{
    console.log (true)
}

// separando
console.log ("      ")
// separando

const valor1 = 102
const valor2 = 1921
imposto = (valor2 * 20 / 100)
let custo = (imposto + valor1)
lucro = (valor2 - custo)
console.log (lucro * 1000)

// separando
console.log ("      ")
// separando

const salario = 30000
console.log ("Sendo o salário " + salario)

if (salario <= 1556.94){
    let inss1 = (salario * 8 / 100)
    let seminss = (salario - inss1)
    console.log ("o inss será " + inss1)
        if (seminss < 1903.98){
            console.log("nao paga ir")
        }
        else if(seminss >= 1903.99 && seminss <= 2826.65){
            let imRe = ((seminss * 7.5 / 100) - 142.80)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe)) 
        }
        else if(seminss >= 2826.66 && seminss <= 3751.05){
            let imRe = ((seminss * 15 / 100) - 358.80)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe))
        }
        else if(seminss >= 3751.06 && seminss <= 4664.68){
            let imRe = ((seminss * 22.5 / 100) - 636.13)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe)) 
        }
        else if(seminss > 4664.68){
            let imRe = ((seminss * 27.5 / 100) - 869.36)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe))

        }
    
}
else if (salario > 1556.95 && salario <=2594.92){
    let inss1 = (salario * 9 /100)
    seminss = (salario - inss1)
    console.log("o inss será " + inss1)
        if (seminss < 1903.98){
            console.log("nao paga ir")
        }
        else if(seminss >= 1903.99 && seminss <= 2826.65){
            let imRe = ((seminss * 7.5 / 100) - 142.80)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe)) 
        }
        else if(seminss >= 2826.66 && seminss <= 3751.05){
            let imRe = ((seminss * 15 / 100) - 358.80)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe))
        }
        else if(seminss >= 3751.06 && seminss <= 4664.68){
            let imRe = ((seminss * 22.5 / 100) - 636.13)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe)) 
        }
        else if(seminss > 4664.68){
            let imRe = ((seminss * 27.5 / 100) - 869.36)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe))

        }
}
else if (salario > 2594.92 && salario <=5189.82){
    let inss1 = (salario * 11 /100)
    console.log("O inss será " + inss1)
    seminss = (salario - inss1)
        if (seminss < 1903.98){
            console.log("nao paga ir")
        }
        else if(seminss >= 1903.99 && seminss <= 2826.65){
            let imRe = ((seminss * 7.5 / 100) - 142.80)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe)) 
        }
        else if(seminss >= 2826.66 && seminss <= 3751.05){
            let imRe = ((seminss * 15 / 100) - 358.80)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe))
        }
        else if(seminss >= 3751.06 && seminss <= 4664.68){
            let imRe = ((seminss * 22.5 / 100) - 636.13)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe)) 
        }
        else if(seminss > 4664.68){
            let imRe = ((seminss * 27.5 / 100) - 869.36)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe))

        }
}

else if (salario > 5189.82){
    inss1 = 570.88
    seminss = (salario - inss1)
    console.log("O INSS será " + inss1)
        if (seminss < 1903.98){
            console.log("nao paga ir")
        }
        else if(seminss >= 1903.99 && seminss <= 2826.65){
            let imRe = ((seminss * 7.5 / 100) - 142.80)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe)) 
        }
        else if(seminss >= 2826.66 && seminss <= 3751.05){
            let imRe = ((seminss * 15 / 100) - 358.80)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe))
        }
        else if(seminss >= 3751.06 && seminss <= 4664.68){
            let imRe = ((seminss * 22.5 / 100) - 636.13)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe)) 
        }
        else if(seminss > 4664.68){
            let imRe = ((seminss * 27.5 / 100) - 869.36)
            console.log ("o imposto será " + imRe)
            console.log ("o salário liquido será " + (seminss - imRe))

        }
}





