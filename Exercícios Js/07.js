/*Faça um programa que leia 5 números e informe o maior número.*/

/*let n1 = prompt('Digite o 1º numero:');
let n2 = prompt('Digite o 2º numero:');
let n3 = prompt('Digite o 3º numero:');
let n4 = prompt('Digite o 4º numero:');
let n5 = prompt('Digite o 5º numero:');

if(n1 > n2 && n1> n3 && n1 > n4 && n1 > n5) {
    alert('O n1 é o maior');
}else if(n2 >n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    alert('O n2 é o maior');
}else if(n3 > n1 && n3> n2 && n3> n4 && n3> n5){
    alert('O n3 é o maior');
}else if(n4> n1 && n4> n2 && n4> n3 && n4> n5){
    alert('O n4 é o maior');
}else{
    alert('O n5 é o maior');
}*/

let n1 = prompt(`Digite seu 1º número: `);
let n2 = prompt(`Digite seu 2º número: `);
let n3 = prompt(`Digite seu 3º número: `);
let n4 = prompt(`Digite seu 4º número: `);
let n5 = prompt(`Digite seu 5º número: `);
let maior = Math.max(n1,n2,n3,n4,n5)
alert(`O maior número é ${maior}`);