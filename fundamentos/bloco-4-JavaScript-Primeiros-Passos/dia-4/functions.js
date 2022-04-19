function arrei(teste){
    let b = 0
   for (let i in teste){
        if (teste[b] < teste[i]){
        b = i
        }
    return b;

    
   }
console.log (arrei( [2, 3, 6, 7, 10, 1]));
}