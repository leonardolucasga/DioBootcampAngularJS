//Estrutura Condicionais

//Boleanos = true/false

const numero =0 ;
const numeroPar = (numero % 2) === 0;  //Boas práticas : utilizar os parênteses como ordem de procedência.
console.log(numeroPar);

//if, else, else if

if(numeroPar) {

    console.log('Par') 
}
else{
    console.log('Impar')
}
