/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */
class Pessoa {
    nome; 
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;   
    }
    calcularImc(){
        return this.peso / (this.altura* this.altura);
    }
    classificarIMC(){
        const imc = this.calcularImc();
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
    }
const jose = new Pessoa('José', 80, 1.75);
    console.log(jose.calcularImc());
    console.log(jose.classificarIMC());


const leo = new Pessoa ('Leonardo', 74, 1.74);
    console.log(leo.calcularImc());
    console.log(leo.classificarIMC());

