// 03-Faça um programa que leia e valide as seguintes informações:
// a)Nome: maior que 3 caracteres;
// b)Idade: entre 0 e 150;
// c)Salário: maior que zero;
// d)Sexo: 'f' ou 'm';
// e)Estado Civil: 's', 'c', 'v', 'd';
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

let nome = prompt('Digite um nome: ');
let idade = prompt('Digite uma idade entre 0 e 150: ');
let salario = prompt('Digite um salário maior que zero: ');
let sexo = prompt('Digite um sexo f para feminino e m para masculino: ');
let estado = prompt('Digite o seu estado civil: s = solteiro, c= casado, v= viuvo, d= divorciado: ');

while (true){
    if(nome.length >3 == true){
        alert(`${nome} true`);
        break;
    }else{
        alert(`${nome} false`);
        break;
    }
}
while (true){
    if(idade >=0 && idade <=150){
        alert(`${idade} true`);
        break;
    }else{
        alert(`${idade} false`);
        break;
    }
}
while (true){
    if(salario >0){
        alert(`${salario} true`);
        break;
    }else{
        alert(`${salario} false`);
        break;
    }
}
while (true){
    if(sexo.replace('f', 'm', 'F', 'M' ==true)){
        alert(`${sexo} true`);
        break;
    }else{
        alert(`${sexo} false`);
        break;
    }
}
while (true){
    if(estado.replace('s','c', 'v', 'd') == true){
        alert(`${estado} true`);
        break;
    }else{
        alert(`${estado} false`);
        break;
    }
}