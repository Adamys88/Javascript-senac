//Adicionando evento
const btn = document.querySelector("#meu-botao");

//Dois argumentos, tipo de evento e função que vai acontecer após clicar no evento
btn.addEventListener("click", function(){
    console.log("Clicou!");
});

//Removendo evento
const segundobtn = document.querySelector("#com-evento");

function imprimirMensagem(){
    console.log("Teste");
}

segundobtn.addEventListener("click", imprimirMensagem);

//Removendo evento
const terceirobtn = document.querySelector("#remove-evento");

terceirobtn.addEventListener("click", () => {
    console.log("Evento removido");
    segundobtn.removeEventListener("click", imprimirMensagem)
});

//Objeto do evento
const meuTitulo = document.querySelector("#meuTitulo");

meuTitulo.addEventListener("click", (e) =>{
    console.log(e);
    console.log(e.offsetX);
});

//Removendo o evento padrão - preventDefault
const a = document.querySelector("a");

a.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("Não vai para a página do Google");
});

//Evento focus 
const input = document.querySelector("#meu-input");

input.addEventListener("focus", (event) => {
    console.log("Entrou no input");
});

//Evento blur
input.addEventListener("blur", (event) => {
    console.log("Saiu do input");
});

//load
window.addEventListener("load", () => {
    console.log("A página foi carregada!");
});

//beforeunload
window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});

//Evento Keydown
const campo = document.getElementById("campo");

campo.addEventListener("keydown", (e) => {
    console.log("KeyDown:", e.key);
});

//Evento Keyup
campo.addEventListener("keyup", (e) => {
    console.log("KeyUp:", e.key);
});

//Pegando uma tela específica
campo.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter pressionado!");
    }
});

//Outros eventos de mouse
const eventosMouse = document.querySelector("#mouse");

//Mousedown
eventosMouse.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
});

//Mouseup
eventosMouse.addEventListener("mouseup", () => {
    console.log("Soltou o botão do mouse");
});

//dblclick - duplo click no mouse
eventosMouse.addEventListener("dblclick", () => {
    console.log("Duplo click");
});