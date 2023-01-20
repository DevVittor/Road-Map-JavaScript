/*Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que 
ele mostre os números um ao lado do outro.*/

let num = 0;

while(num <20){
    num++;
    if(num <10){
        document.write(`0${num}-`)
    }else if(num <20){
        document.write(`${num}-`);
    }else{
        document.write(`${num}`);
    }
}
