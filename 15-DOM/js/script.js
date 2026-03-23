//DOM movimentando-se nele
console.log(document.body);

//Nodelist - acessar a lista de nós filhos
console.log(document.body.childNodes);

//Acessando um elemento na posição da Nodelist
console.log(document.body.childNodes[1].ChildNodes);

//Propriedades para acessar o elemento do título
console.log(document.body.childNodes[1].childNodes[1].textContent);

//Selecionando por tags
const listadeItens = document.getElementsByTagName("li");
console.log(listadeItens);

//Selecionando elemento por ID
const titulo = document.getElementById("titulo");
console.log(titulo);

//Selecionando elemento por classe 
const produtos = document.getElementByClassName("produtos");
console.log(produtos);

//insertBefore - inserir antes
const paragrafo = document.createElement("P");
const header = titulo.parentElement;
header.insertBefore(paragrafo, titulo);
const pegarParagrafo = document.getElementsByTagName("P");
console.log(pegarParagrafo);

//appendChild - adiciona um novo filho no final
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

//replaceChild - substitui um filho existente por um novo filho
const h2 = document.createElement("h2");
h2.textContent = "Novo Título";
header.replaceChild(h2, titulo);

//Criando nó de texto
const meuTexto = document.createTextNode("Inserindo outro título");
console.log(meuTexto);
const h3 = document.createElement("h3");
h3.appendChild(meuTexto);
console.log(h3);

//Substituindo
header.replaceChild(h3, h2);

//setAttribute e getAttribute
const primeiroLink = navLinks.querySelector("a");
console.log(primeiroLink);
primeiroLink.setAttribute("href", "https://www.uol.com.br/");

//Pegando o link alterado
console.log(primeiroLink.getAttribute("href"));

//Abrir em uma nova aba
primeiroLink.setAttribute("target", "_blank");

//Altura e largura
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//getClientBoundingRect - retângulo delimitador do conteúdo visível
const produtos1 = produtos[0];
console.log(produtos1.getBoundingClientRect());

//CSS com JS
const mainContainer = document.getElementById("main-container");
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#234";
mainContainer.style.paddingBotton = "100px";

//HTML Collection - fazendo um loop no li e alterando a cor de fundo
for (const li of listadeItens) {
    li.style.backgroundColor = "yellow";
}
