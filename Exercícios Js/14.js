/*Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a 
quantidade de números ímpares.*/

let numeros = [];
let valoresPar = [];
let valoresImpar = [];
let count = 1;

while(numeros.length <10){
    var pedir = parseInt(prompt(`Digite o ${count}º número: `));
    numeros.push(pedir);
    count++;
}

for(var i = 0; i< numeros.length; i++){
    if(numeros[i] % 2 == 0){
        valoresPar.push(numeros[i]);
    }else{
        valoresImpar.push(numeros[i]);
    }
}
alert(`Os números digitados foram esses ${numeros} e nele tem esses números pares ${valoresPar} e os números Impares ${valoresImpar}`);