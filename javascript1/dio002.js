const azul = true;
const vermelho = false;

const num = 0;
const numeroPar = (num % 2) === 0;

console.log(numeroPar);

if(num === 0){
    console.log('O número digitado foi 0');
}

else if(numeroPar){
    console.log('O número é par!');
}

else {
    console.log('O número é impar!'); 
}