/*Hoje em dia a duas maneiras de declaração uma função*/

//A primeira forma é a mais tradicional e ultrapassada

//Ex:

function mostrarNome (){
    let nome = 'Vittor';
    console.log(nome);
}
mostrarNome();

//E também existe a função anônima

const mostrarNumero = function(){
    let numero = 20;
    console.log(numero);
}
mostrarNumero();

//Hoje em dia a mais utilizada é a arrow function 

const mostrarIdade = ()=>{
    let idade = 19;
    console.log(idade);
}
mostrarIdade();

//Função também serve para retornar algo

const soma = ()=>{
    return 10 + 20;
}
console.log(soma());

//Função com parâmetros

const numeros = (x,y)=>{
    return x + y;
}
console.log(numeros(5,10));

//Parâmetro de repouso da função

function sum(...args){
    let sum = 0;
    for (let arg of args) sum += args;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

//Eu ainda não entendi muito bem como funciona essa função acima mas vou tentar entender melhor