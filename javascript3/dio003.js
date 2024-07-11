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

function comparacao(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }

    else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }

    else {
        console.log(`${p1.nome} tem a mesma idade de ${p2.nome}`);
    }
}

const fulano = new Pessoa('fulano', 29);
const ciclano = new Pessoa('ciclano', 19);

comparacao(fulano, ciclano);