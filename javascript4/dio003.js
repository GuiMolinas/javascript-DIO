const notas = [];

notas.push(2);
notas.push(7);
notas.push(10);
notas.push(1);
notas.push(9);
notas.push(8);

let soma = 0;

for(i=0;i < notas.length; i++){
    const media = notas[i];
    soma = soma + media;
}

mediaF = soma / notas.length;
console.log(mediaF);