class Pessoa {
    nome;
    idade;
    constructor(nome, idade){
        this.nome= nome;
        this.idade = idade;

    }
}


function compararIdade(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome}  é mais velho (a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else{
        console.log(`a idade de ${p1.nome} e de ${p2.nome} são iguais.`)
    }
}
const aurora = new Pessoa('Aurora', 2)
const julia = new Pessoa('Julia', 24)
compararIdade(aurora, julia)