//O symbol tem duas caracteristicas ele é imutável e único
//Além de todo symbol criado ser único ele é imutável(Não sofre mudanças, inalterável)
//Ela serve para que você não sofra o risco de ter algum conflito com nomes por exemplo
//Symbol é outro tipo primitivo como o array e String

let coisa01 = Symbol('nome');
let coisa02 = Symbol('nome');

console.log(coisa01 == coisa02);//False
console.log(coisa01 === coisa02)//False
console.log(coisa01 != coisa02);//True
const nome = ()=>{
    console.log("")
}