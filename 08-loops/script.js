//While (Enquanto)
let x = 1;

while(x <= 10){
    console.log(x);
    x = x + 1;    
}

let y = 10;

while (y >= 5){
    console.log(y);
    y--; //decremento o mesmo que y = y - 1;
}

//do while (fazer enquanto)
let m = 15;

do{
    console.log(`${m}`);
    m = m + 2;
} while(m <= 21);

//Comparando while e do while
let n = 12;

while(n <= 10){
    console.log(n);
    n++; //incremento
}

//Executa pelo menos 1 vez antes do loop
do{
    console.log(n);
    n++;
}while(n <= 10);

//Break
let contador = 0;

while(contador < 10){
    console.log("Contador: " + contador);

    //Interrompe o loop se o contador for igual a 5
    if(contador === 5){
        break;
    }
    contador++;
}

//For 
for(i = 1 ; i <= 5; i++){
    console.log(i);
}

let j = 5;

for(j; j > 2; j--){
    console.log(j);
}

//Continue 
for(let k = 1; k <= 7; k++){
    //Pula a impresão do número 5
    if(k === 5){
      continue;
    }

    console.log(k);
}

//Percorrendo um array com loop for
const listNome = ["João", "Maria", "José"];

for(let p = 0; p < listNome.length; p++){
    console.log(listNome[p]);
}

//Percorrendo um array com loop forEach
listNome.forEach(function(nome){
    console.log(nome);
});

//Mais moderno - forEach com arrow function
listNome.forEach(nome => {
    console.log(nome);
});

//Nome e index com forEach
listNome.forEach((nome, indice) => {
    console.log(indice, nome);
});

//Interando sobre um array
const frutasF = ["Morango", "Abacate", "Goiaba"];

for(const cadaFruta of frutasF) {
    console.log(cadaFruta);
}

//Iterando sobre uma string
const texto = "Olá, mundo!";

for(const letra of texto){
    console.log(letra);
}