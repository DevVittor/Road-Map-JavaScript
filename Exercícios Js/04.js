/*04-Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a 
população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número 
de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.*/
let anos = 0;
let peopleA = 80000;
let peopleB = 200000;
while (peopleA < peopleB) {
    peopleA += peopleA * (3/100);
    peopleB += peopleB * (1.5/100);
    anos++;
}
console.log(`A população A conseguiu ultrapassar a população B com apenas ${anos} anos por o total de ${Math.round(peopleA)} pessoas contra ${Math.round(peopleB)} pessoas`);