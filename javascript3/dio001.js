const objeto = {
    nome: 'fulano',
    idade: 87,
    descrever: function (){
        console.log(`Me chamo ${this.nome} e tenho ${this.idade} anos.`);
    }
}

objeto.altura = 1.7;

console.log(objeto.idade);
console.log(objeto);
objeto.descrever();

delete objeto.nome;

console.log(objeto);

console.log(objeto['idade']);