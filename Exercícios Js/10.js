/*Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.*/

let numInt01 = parseInt(prompt('Digite 1º número inteiro: '));
let numInt02 = parseInt(prompt('Digite 2º número inteiro: '));

while(numInt01 > numInt02){
    numInt01 = prompt(`O 1º-${numInt01} é maior que o 2º-${numInt02} Digite novamente : `);
}
while(numInt01 <= numInt02){
    document.write(`${numInt01}-`);
    numInt01++;
}