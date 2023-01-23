/*Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120
Calcular fatorial com laços*/

let fatorial = parseInt(prompt("Digite um número: "));
let resultado = fatorial;
for(let i = 1; i < fatorial; i++){
    resultado *= i;
}

alert(`O fatorial de ${fatorial} é ${resultado}`);