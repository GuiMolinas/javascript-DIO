let nota1 = 3;
let nota2 = 1;
let nota3 = 8;

let media = (nota1 + nota2 + nota3)/3;

if(media < 5){
    console.log('Aluno reprovado!');
}

else if(media >= 5 && media <= 7) {
    console.log('Aluno em recuperação!');
}

else {
    console.log('Aluno passou de semestre!');
}