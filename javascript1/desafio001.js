console.log('Cálculo de viagem');

var precoCombustivel = 5.79;
var gastoCombustivel = 10;
var distancia = 100;

console.log('Preço do combustível: R$ ' + precoCombustivel.toFixed(2));
console.log('Gasto médio de combustível por KM: ' + gastoCombustivel.toFixed(2) + ' L');
console.log('Distância da viagem em KM: ' + distancia.toFixed(2) + ' KM');

var viagem = precoCombustivel * (distancia/gastoCombustivel);

console.log('O gasto dessa viagem será de R$ ' + viagem.toFixed(2));