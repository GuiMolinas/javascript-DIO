function teste(){
    console.log('teste');
}

function sayMyName(nome){
    console.log('Seu nome é ' + nome);
}

teste();
sayMyName('Guilherme');

function quadrado(valor){
    return Math.pow(valor, 2);
}

const resultado = quadrado(2);
console.log(resultado);

function calcularJuros(valor, porcentual){
    const valorAcrescido = (porcentual / 100) * valor;
    return valor + valorAcrescido;
}

console.log(calcularJuros(100,10));