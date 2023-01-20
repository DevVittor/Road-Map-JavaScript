/*Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.*/

let numeros = [];
let loop = 1;
while (loop <=50){
    if(loop % 2 != 0){
        var adicionar = numeros.push(loop);
    }
    loop++;
}
document.write(numeros);