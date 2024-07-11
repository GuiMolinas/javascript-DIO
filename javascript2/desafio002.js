function maiorIdade(idade){
    if(idade >= 18){
        console.log('Você é maior de idade');
    }

    else {
        console.log('Você é menor de idade');
    }
}

function main(){
    const idade = 19;

    maiorIdade(idade);
}

main();