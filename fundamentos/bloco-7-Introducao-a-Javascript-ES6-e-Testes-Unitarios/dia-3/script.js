function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }
module.exports = {sum, myRemove, myFizzBuzz, encode, decode};
// ----
function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  //--------
  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
  //-----

  function encode(estringue) {
    // let inicio = estringue;
    for (i = 0; i < estringue.length; i += 1){
      estringue = estringue.replace('a', '1')
      estringue = estringue.replace('e', '2')
      estringue = estringue.replace('i', '3')
      estringue = estringue.replace('o', '4')
      estringue = estringue.replace('u', '5')
    }
    return estringue
  }
  function decode(estringue) {
      final = estringue
    for (i = 0; i < estringue.length; i += 1){
      final = final.replace('1', 'a')
      final = final.replace('2', 'e')
      final = final.replace('3', 'i')
      final = final.replace('4', 'o')
      final = final.replace('5', 'u')
  }
  return final
  }