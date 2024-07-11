let precoEtanol = 5.79;
let precoGasolina = 6.66;
let tipoCombustivel = 'jhhjhj';
let gastoMedio = 10;
let distancia = 100;

let combustivel;


if(tipoCombustivel === 'Gasolina'){
    combustivel = precoGasolina;
    console.log('Você abasteceu com Gasolina');
}

else{
    combustivel = precoEtanol;
    console.log('Você abasteceu com Etanol');
}

var viagem = combustivel * (distancia/gastoMedio);

console.log(viagem.toFixed(2));

