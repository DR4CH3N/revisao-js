// criando as arrays (matrizes)
// obs: em quase TODAS as linguagens de programação, se começa com 0
const nome = ["jose,", "joao", "maria", "lucas"];
const nasc = [ 1983,    2012,   2000,     1945];


const data = new Date();
const ano = data.getFullYear();

let contador = 0;



// criando o loop

// enquanto o contador tiver o mesmo numero de indices ele vai repetir 4 vezes
// nome.length vai pegar o numero de indices que tem no nome 
while (contador < nome.length) {
    let idade = ano - nasc[contador];

    if (idade >= 18) {
        console.log(`${nome[contador]} tem ${idade} anos e pode dirigir`);    
    }
    else {
        console.log(`${nome[contador]} só podera dirigir ao completar 18 anos`)
    }
    
    contador++
    // contador++ adiciona +1 ao contador, fazendo com que voce consiga parar o loop
}