let preco = 100;
let opcaoPagamento = 5;
let desconto;

if(opcaoPagamento === 1){
    desconto = preco - (preco * 0.1);
}

else if(opcaoPagamento === 2) {
    desconto = preco - (preco * 0.15);
}

else if(opcaoPagamento === 3){
    desconto = preco;
}

else {
    desconto = preco + (preco * 0.1);
}

console.log(desconto.toFixed(2));