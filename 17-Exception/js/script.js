//Try e Catch
try{
    result
} catch (exception) {
    console.error("Ocorreu um erro: " + exception.message);
}

finally{
    console.log("O bloco finally sempre é executado");
}

//Após definir result
try{
    let result = 1 + 1;
    console.log(result);
} catch (exception) {
    console.error("Ocorreu um erro: " + exception.message);
}
finally{
    console.log("O bloco finally sempre é executado");
}

//Assertions - Lança mensagem de um erro quando a condição é falsa
let y = 5;
console.assert( y === 15, "y não é igual a 15");

//Exception - Sempre no final do código
let x = 5;
if(x != 10) {
    throw new Error ("O valor de x não pode ser diferente de 10");
}


