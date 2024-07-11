class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(){
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificaIMC(){
        const imc = this.imc();
        
        if(imc < 18.5){
            return('Você está abaixo do peso!');
        }
        
        else if(imc >= 18.5 && imc < 25){
            return('Você está com peso normal!');
        }
        
        else if(imc >= 25 && imc < 30){
            return('Você está acima do peso!');
        }
        
        else if(imc >= 30 && imc < 40){
            return('Você está com obesidade!');
        }
        
        else {
            return('Você está com obesidade grave!');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.imc().toFixed(2));
console.log(jose.classificaIMC());