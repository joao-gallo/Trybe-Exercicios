let botao = document.getElementById('botao')
botao.addEventListener('click', (event) => {
    event.preventDefault()
})
let resetar = document.getElementById('#resetar')

function limpa(){
    const tudo = document.querySelectorAll('input')
    const texto = document.querySelectorAll('textarea')
    for (let index = 0; index < tudo.length; index += 1) {
        const essaporra = tudo[index];
        essaporra.value = '';
        essaporra.checked = false;
      }
      texto.value = '';
}


    const apaga = document.querySelector('#resetar');
    apaga.addEventListener('click', limpa);
    