class Carros {
    marca;
    cor;
    gastoCombustivel;

    constructor(marca, cor, gastoCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivel = gastoCombustivel;
    }

    valor(preco, distancia){
        return distancia * this.gastoCombustivel * preco;
    }

}



const bmw = new Carros('BMW', 'Azul', 20);


console.log(bmw);
console.log(bmw.valor(70, 5));