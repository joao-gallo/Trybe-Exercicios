function verify(value1, value2){
    if (value1 === '' || value2 === ''){
        throw new Error ('Valores invalidos')
    }
}

function sum() {
    try{
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verify(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado:${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    }
catch (error){
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
}
}
 window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }
