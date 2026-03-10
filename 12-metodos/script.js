//Método string: trim
const textoEspacado = " Essa é uma string com espaços em branco ";

const textoSemEspacos = textoEspacado.trim();

console.log(textoSemEspacos);

//Método padStart
const numero = "1234";

//Preencher com zeros até atingir 8 caeacteres
const numeroFormatado = numero.padStart(8, "0");
console.log(numeroFormatado);

const codigo = "ABC";

//Preencher com traços para atingir 5 caracteres 
const codigoPreenchido = codigo.padStart(5, "-");
console.log(codigoPreenchido);

//Preenchendo no final padEnd
const codigoFinal = codigo.padEnd(5, "-");
console.log(codigoFinal);

//Método split - dividir uma string
const textoT = "Essa é uma string para testar split";

//Divide a string e um array de palavras, usando espaços como separadores
const palavras = textoT.split(" ");
console.log(palavras);

//Divide a string em um array de 3 elementos, usando espaços como separadores
const partes = textoT.split(" ", 3);
console.log(partes);

//Divide a string em um array de números, usando vírgulas como separadores
const numeros = "1, 2, 3, 4, 5".split(",");
console.log(numeros);

//Método join
const numerosJoin = [1, 2, 3, 4, 5];

//Junta os números com vírgulas como separador 
const listaNumeros = numerosJoin.join();
console.log(listaNumeros);

//Junta os números com traços como separador
const listaNumerosTracos = numerosJoin.join("-");
console.log(listaNumerosTracos);

//Junta os elementos de um array de strings
const frutas = ["maçã", "banana", "laranja"];
const textoFrutas = frutas.join(" e ");
console.log(textoFrutas);

//Método repeat
const testandoRepeat = "Olá";

//Repetindo a string 3 vezes 
const textoRepetido = testandoRepeat.repeat(3);
console.log(textoRepetido);

//Repetindo a string 0 vezes 
const textoVazio = testandoRepeat.repeat(0);
console.log(textoVazio);
