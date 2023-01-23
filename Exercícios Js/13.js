/*Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao 
segundo número. Não utilize a função de potência da linguagem. */

let base = parseInt(prompt("Digite o 1º número"));
let expoente = parseInt(prompt("Digite o 2º número"));
let potencia = 1;
let loop = 1;


//Fazendo usando While
/*while(loop <= expoente){
    potencia *= base;
    loop++;
}
alert(`Base ${base}, Expoente ${expoente} = ${potencia}`);*/

//Refazendo mas dessa vez usando for

for(let i = 0; i < expoente; i++){
    potencia *= base;
}
alert(`Base ${base}, Expoente ${expoente} = ${potencia}`);