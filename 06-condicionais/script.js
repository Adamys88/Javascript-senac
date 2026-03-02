//if (se condição for verdadeira)
const numerico = 10;

if(numerico > 8){
    console.log("O número informado é maior que 8");
}

const nomealuno = "Juliano";

if(nomealuno === "Juliano"){
    console.log("Olá Juliano");
}

if(nomealuno === "Maria"){
    console.log("Olá Maria"); //Perceba que ese bloco foi ignorado
}

//else (Condição se falsa ou se a primeira não for atendida)
const logado = false;

if(logado){
    console.log("Está logado!");
}
else{
    console.log("Não está logado!");
}

const altura = 1.70;

if(altura > 1.80){
    console.log("Essa pessoa tem mais de 1,80 de altura");    
} else{
    console.log("Essa pessoa tem menos de 1,80 de altura");
}

const maioridade = "18 anos";
const habilitado = true;

if(maioridade >= 18 && habilitado === false){
    console.log("Não habilitada");
} else{
    console.log("Habilitada");
}

//else if (verificar várias condições)
const cachorro = "Pastor Alemão";
const nomedocachorro = "Zeca";

if(cachorro === "Dálmata"){
    console.log("É um dálmata!");
} else if(nomedocachorro === "Zeca"){
    console.log("Se chama Zeca!");
} else{
    console.log("É um poodle");
}

if(1 > 2){
    console.log("Teste 1 é verdadeiro");
} else if(2 > 4){
    console.log("Teste 2 é verdadeiro");
} else if(4 < 7){
    console.log("Teste 3 é verdadeiro");
} else{
    console.log("Não temos condição verdadeira");
}

//Switch
let idade = 18;

switch(idade){
    case 18:
        console.log("O usuário é maior de idade.");
        break;
    case 17:
        console.log("O é menor de idade.");
        break;
    default:
        console.log("Idade inválida.");       
}

let opcao = "chocolate";

switch(opcao){
    case "pizza":
        console.log("Pizza chegando!");
        break;
    case "sushi":
        console.log("Sushi fresquinho");
        break
    case "hamburguer":
        console.log("Hambúrguer suculento");
        break
    default:
        console.log("Não temos esse produto!");            
}


