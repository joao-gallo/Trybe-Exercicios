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
// separando
console.log ('--------------')
// separando

let second = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}
for (let propriedades in info) {
    if (
      propriedades === 'recorrente' &&
      info[propriedades] === 'Sim' &&
      second[propriedades] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[propriedades] + ' e ' + second[propriedades]);
    }
  }
// separando
console.log ('--------------')
// separando

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favortio de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"')
// separando
console.log ('--------------')
// separando

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })
// separando
console.log ('--------------')
// separando

console.log (leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')