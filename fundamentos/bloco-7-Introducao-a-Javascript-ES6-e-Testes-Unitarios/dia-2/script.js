const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function noite(object, key, value){
      object[key] = value;
  }
  noite(lesson2, 'turno', 'Noite')
  console.log(lesson2)

  function lista(objeto){
      return Object.keys(objeto)
  }
  console.log(lista(lesson3))

  function listaVa(objetin){
      return Object.values(objetin)
  }
  console.log(listaVa(lesson3))

  let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
console.log(allLessons)

function allStudents(){
   let sala1 = allLessons.lesson1.numeroEstudantes
   let sala2 = allLessons.lesson2.numeroEstudantes
   let sala3 = allLessons.lesson3.numeroEstudantes
   return (sala1 + sala2 + sala3)
}
console.log(allStudents())

function valorChave(chave, valor){
    return Object.values(chave)[valor];
}
console.log(valorChave(lesson1, 0))

function existe(obj, ky, val){
    obje = Object.entries(obj)
    for(i in obje){
    if (Object.keys[i] == obj.ky && Object.values[i] == obj.val){
        exist = true
    }

    else{
        exist = false
    }

    return exist
}
}
console.log(existe(lesson3, 'turno', 'noite'))