let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// separando
console.log ('--------------')
// separando

  console.log('Bem vinda, ' + info['personagem'])
// separando
console.log ('--------------')
// separando

  info.recorrente = 'Sim'
  console.log (info)
// separando
console.log ('--------------')
// separando

for (let key in info){
    console.log (key)
}
// separando
console.log ('--------------')
// separando

for(key in info) {
    console.log(info[key])
}