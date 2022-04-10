 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// soma = (numbers[0] + numbers[1] + numbers[2] + numbers [3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9])
// let media = (soma / 10)
// if(media > 20){
//     console.log("valor maior que 20")
// }else{
//     console.log("valor menor ou igual a 20")
// }
// let maiorNumero = numbers[0]

// for(let i = 1; i < numbers.length; i += 1){
//     if (numbers[i] > maiorNumero){
//         maiorNumero = numbers[i]
//     }
// }
//    console.log(maiorNumero)

for (let i = 1; i < numbers.length; i += 1){
    if (numbers[i] % 2 ==! 0){
        console.log ("tem impar")
    }else if (numbers[i] % 2 == 0){
        console.log("tem par");
    }else (
        console.log("Nenhum valor impar encontrado")
    )
}