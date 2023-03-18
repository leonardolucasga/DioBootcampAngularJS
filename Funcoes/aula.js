

/*
function sayMyName (name){
    console.log('Your name is ' + name);
}
sayMyName('Leonardo')
sayMyName('Julian') */
/*function quadrado(valor){
    return valor * valor;
    }
const quadradoDeDEz = quadrado (10);
console.log(quadrado(10)+ quadrado(10));
 */
/*function incrementarJuros(valor, percentualJuros){

   const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return  valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(100, 15))
console.log(incrementarJuros(100, 20)) */


function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}

// Main
(function main() {
    const peso = 74;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
