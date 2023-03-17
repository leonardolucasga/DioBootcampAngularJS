/* Faça um programa para calcular o preço de uma viagem;

Você terá 3 variáveis, Sendo elas:
Preço do combustível;
Gasto medio de combustível do carro por KM
Distância em KM da viagem; */

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distEmKm = 100;

const litroConsumidos = distEmKm /kmPorLitros;
const precoViagem = precoCombustivel*litroConsumidos;
console.log(`O preço que foi gasto foi de R$ ${precoViagem.toFixed(2)} `); // Entre parenteses o número de casas decimais desejado.
