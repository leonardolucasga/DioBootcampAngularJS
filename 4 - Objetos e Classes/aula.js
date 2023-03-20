class Pessoa{
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 -idade;
        
    }

     descrever() {
        console.log(`Meu nome eh: ${this.nome} e minha idade é ${this.idade}`);      //Classe = Definição. //Instancia = Ocorrência.
        
    }
}
const aurora = new Pessoa('Aurora', 3)
const julia = new Pessoa('Julia', 25)
aurora.descrever();
julia.descrever();
console.log(aurora)
/*const aurora = new Pessoa ();
console.log(aurora)
aurora.nome = 'Aurora Lorena A Gonçalves';
aurora.idade = 2;
console.log(aurora)

const julia = new Pessoa();
julia.nome = 'Julia Wanessa A Ferreira'
julia.idade = 24
console.log(julia)
aurora.descrever();
julia.descrever();       */       // --------> Class: é a definição do objeto, ----> Instância : é a ocorrência do objeto.
/*

const pessoa = {
    nome: 'Leonardo L G Alcantara',
    idade: 24 + ' anos',
    descrever: function(){
        console.log(`Meu nome eh: ${this.nome} e minha idade é ${this.idade}`);

    }
} */
/* console.log(Leo.nome);
console.log(Leo.idade);                 -> Podemos chamar metodos dos objetos, ou objetos completos.
console.log(Leo); */


/*Leo.altura = 1.75;    
console.log(Leo)                        -> Um objeto em javascript é uma coleção  dinâmica de Chave-Valor, podemos adcionar ou remover valores.
*/
/*
const atributo = 'idade';
console.log(pessoa[atributo]);  
console.log(pessoa['nome']);              --> forma de acessar diretamente atraves da string; */

//pessoa['nome'] = 'Aurora';
/*pessoa.nome = 'teste';
console.log(pessoa); */