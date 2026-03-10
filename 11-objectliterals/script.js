//Object Literals
const objetoPessoa = {
    nome: "João", 
    idade: 30,
};

console.log(objetoPessoa);
console.log(typeof objetoPessoa);
console.log(objetoPessoa.nome);

//Removendo de uma propriedade de um objeto
delete objetoPessoa.idade;
console.log(objetoPessoa);

//Adicionando uma propriedade ao objeto
objetoPessoa.sobrenome = "Santana";
console.log(objetoPessoa);

//Método Assign
const objeto1 = {
    nome: "Maria",
    idade: 22,
};

const objeto2 = {
    altura: 1.65, 
    gênero: "Feminino",
};

const objetoDestino = {};
 
Object.assign(objetoDestino, objeto1, objeto2);
console.log(objetoDestino);

//Método Keys
const chaves = Object.keys(objetoDestino);
console.log(chaves);

//Mutação - atribuição
 const hospede = {
    nome: "Alberto",
 };

hospede.nome = "Júnior";
console.log(hospede.nome);

 // Mutação - incersão
 hospede.sobrenome ="Lima";
 console.log(hospede);

 //Mutação - operador de adição
 const hospedeNovo = {
    nome: "Priscila",
    idade: 42,
 };

 hospedeNovo.idade += 2;
 console.log(hospedeNovo.idade);

 //Mutação deletar 
 delete hospedeNovo.nome;
 console.log(hospedeNovo);

 //Desestruturando objetos
 const usuarioA = {
    primeiroNome: "Pablo",
    sobrenome: "Xavier",
    profissao:"Pedreiro",
 };

 const[primeiroNome, sobrenome, profissao] = Object.values(usuarioA);
 console.log(primeiroNome, sobrenome, profissao);

