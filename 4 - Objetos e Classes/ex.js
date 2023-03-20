/*

1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro{
    marca;
    cor; 
    gastoMedioPorKm;
    constructor(cor, marca, gastoMedioPorKm){
       this.marca = marca;
       this.cor = cor;
       this.gastoMedioPorKm = gastoMedioPorKm;

    
}
    calcularGasto(distanciaEmKm, precoCombustivel){
        return (distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel
    }
}
const carro1 = new Carro('Porshe', 'Branco', 1 / 12);
    console.log(carro1.calcularGasto(70,5));

const carro2 = new Carro('Lamborgini', 'Azul', 1 / 10);
    console.log(carro2.calcularGasto(120,5));
/*

1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */