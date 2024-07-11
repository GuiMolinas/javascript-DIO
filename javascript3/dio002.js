class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever () {
        console.log(`Me chamo ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const fulano = new Pessoa('fulano ciclano', 30);
fulano.nome='fulano ciclano';
fulano.idade = 30;

const ciclano = new Pessoa('ciclano fulano', 20);
ciclano.nome='ciclano fulano';
ciclano.idade = 20;


console.log(fulano);
console.log(ciclano);

fulano.descrever();
ciclano.descrever();

console.log(fulano);