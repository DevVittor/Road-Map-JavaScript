//01-Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue 
//pedindo até que o usuário informe um valor válido.
var nota = prompt("Digite uma nota");
while(nota <0 || nota >10){
    alert("Nota Inválida");
    nota = prompt("Digite uma nota válida novamente");
    break;
}
alert(`${nota} é uma nota válida`);
let quest = prompt("Deseja recomeçar S/N ?");
if(quest.replace('Sim') || quest.replace('sim') || quest.replace('S') || quest.replace('s')) {
    nota = prompt("Digite uma nota"); 
    while(nota <0 || nota >10){
        alert("Nota Inválida");
        nota = prompt("Digite uma nota válida novamente");
        break;
    }
    alert(`${nota} é uma nota válida`);
}else{
    alert('Ok, programa está sendo encerrado!');
}