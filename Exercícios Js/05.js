/*Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a 
entrada e permita repetir a operação.*/

let people = prompt('Quantidade de pessoas: ');
let taxas = prompt('Valor da taxa');
let quest = prompt('Se digitar s vai repetir todo o processo se não vai encerrar tudo!');
while(quest.replace() == 's'){
    people = prompt('Quantidade de pessoas: ');
    taxas = prompt('Valor da taxa');
    quest = prompt('Se digitar s vai repetir todo o processo se não vai encerrar tudo!');
}
alert(`Quantidade de ${people} pessoas com a taxa de crescimento de ${taxas} ao ano`)