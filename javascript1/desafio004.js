let peso = 55;
let altura = 1.70;

let imc = peso/Math.pow(altura,2);

if(imc < 18.5){
    console.log('Você está abaixo do peso!');
}

else if(imc >= 18.5 && imc < 25){
    console.log('Você está com peso normal!');
}

else if(imc >= 25 && imc < 30){
    console.log('Você está acima do peso!');
}

else if(imc >= 30 && imc < 40){
    console.log('Você está com obesidade!');
}

else {
    console.log('Você está com obesidade grave!');
}