//Array 
const nomes = ["João", "Maria", "José"];

console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]); //Essa posição não existe (undefined)

//Adicionando um elemento no array
nomes.push("Beatriz");
console.log(nomes);

//Removendo o último elemento do array
nomes.pop();
console.log("Beatriz foi removida " + nomes);

//Alterar um elemento do array
nomes[0] = "João Pedro";
console.log(nomes);

//Concatenar dois arrays
const numeros = [6, 7, 8];
console.log(numeros.length);

const outrosNumeros = [3, 9, 2];
const juncaoNumeros = numeros.concat(outrosNumeros);
console.log(juncaoNumeros);

//Removendo o primeiro elememto do array
const nomesNovos = ["Joaquina", "Felipe", "Plínio"];

const primeiroNome = nomesNovos.shift();
console.log(nomesNovos);
console.log(nomesNovos[0]);

//Adicionar um ou mais elementos no início do array
const numerosTeste = [1, 2, 3];

numerosTeste.unshift(0);
console.log(numerosTeste);

//Encontra a primeira ocorrência no elemento especificado
const frutas = ["maçã", "banana", "manga", "abacaxi",];

console.log(frutas.indexOf("maçã"));
console.log(frutas.indexOf("laranja"));

//Encontrar a última ocorrência do elemento especificado
const letras = ["a", "b", "c", "a", "d"];

console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("z"));

//Verifica se um elemento está presente no array 
const frutasDona = ["maçã", "banana","laranja"];

const temMaca = frutasDona.includes("maçã");
const temMelancia = frutasDona.includes("melancia");
console.log(temMaca);
console.log(temMelancia);

//Includes à partir de uma posição
const letrasNovo = ["a", "b", "c", "d", "a"];
const temAPos = letrasNovo.includes("b", 2);
console.log(temAPos);

//Revertendo array
const testandoReverse = [1, 2, 3, 4, 5];

testandoReverse.reverse();
console.log(testandoReverse);

//Invertendo a ordem do array
const testandoSpread = ["a", "b", "c", "d", "e"];
console.log(testandoSpread)

const novasLetras = [...testandoSpread].reverse();
console.log(novasLetras);

//Converte todas as letras de uma string para MAIÚSCULAS
const fraseA = "Boas vindas!";
const upper = fraseA.toLocaleUpperCase();
console.log(upper);

//Converte todas as letras de uma string para minúsculas
const fraseB = "QUE LEGAL!";
const lower = fraseB.toLowerCase();
console.log(lower);

//Array dinâmico (lista)
let frutasD = [];
frutasD.push("Maçã");
frutasD.push("Uva");
frutasD.push("Manga");

for(let i = 0; i < frutasD.length; i++){
    console.log("Índive " + i + ": " + frutasD[i]);
}

//Array bidimensional (Matriz)
let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

for(let b = 0; b < matriz.length; b++){
    for(let c = 0; c < matriz[b].length; c++){
        console.log("[" + b + "][" + c + "] = " + matriz[b][c]);
    }
}

//Array associativo (Object)
let usuario = {
    nome: "Ana",
    idade: 18,
    cidade: "São Paulo"
};

for(let chave in usuario){
    console.log(chave + ": " + usuario[chave]);
}

//Desestruturar array
const novoArray = ["Natália", "Eduarda", "Milena"];

const [primeira, segunda, terceira] = novoArray;
console.log(primeira);
console.log(segunda);
console.log(terceira);