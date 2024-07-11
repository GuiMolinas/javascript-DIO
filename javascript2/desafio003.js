function desconto(preco, desconto){
    return (preco - (preco * (desconto/100)));
}

function juros(preco, juros){
    return (preco + (preco * (juros/100)));
}

const preco = 100;
const opcaoPagamento = 4;

if(opcaoPagamento === 1){
    console.log(desconto(preco, 10));
}

else if(opcaoPagamento === 2) {
    console.log(desconto(preco, 15));
}

else if(opcaoPagamento === 3){
    console.log(desconto(preco, 0));
}

else {
    console.log(juros(preco, 10));
}

