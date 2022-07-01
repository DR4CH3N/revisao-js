// descobrir se alguem ja pode dirigir no brasil

// declarando variaveis
/* const nome = "marquinhos";
const nasc = 2000;
var data = new Date();
var anoAtual = data.getFullYear();

// calculando a idade
let idade = anoAtual - nasc;


if (idade >= 18) {
    // primeira verificação
    console.log(`${nome} tem ${idade} anos e ja pode dirigir`)
    
    // segunda verificação
    if (idade > 30) {
        console.log(`com ${idade} anos, aconselhamos comprar um carro zero`)
    }
    else {
        console.log(`aconselhamos a comprar um carro usado`)
    }
}
// caso a primeira verificação não se conclua, o codigo vai pular direto pra esse codigo
else {
    console.log(nome + ' não pode dirigir, apenas quando tiver 18 anos :<')
}
*/

// variação 1 - deixando o usuario digitar o nome e ano de nascimento atraves do prompt e exibindo na tela

// prompt vai fazer com que apareça um alerta e o usuario possa digitar nele
const nomeUser = prompt("digite seu nome");
const nascUser = prompt("digite seu ano de nascimento com 4 digitos");

let dataUser = new Date();
let anoAtualUser = dataUser.getFullYear();

// fazendo calculo com as variaveis
let idadeUser = anoAtualUser - nascUser;
let conteudo = document.getElementById("conteudo")

if (idadeUser >= 18) {
    conteudo.innerHTML = ` <strong>${nomeUser}</strong> tem ${idadeUser} anos e ja pode dirigir `

    // += concatena conteudo, caso algo estiver sem += ele pode apagar o conteudo do codigo anterior
    if (idadeUser > 30) {
        conteudo.innerHTML += ` <br> com ${idadeUser} anos, aconselhamos a comprar um carro zero`
    }
    else {
        conteudo.innerHTML += `<br>aconselhamos a comprar um carro usado`
    }
} else {
    conteudo.innerHTML = `${nomeUser} podera dirigir ao completar 18 anos`
}

// variação 2 - usando funções para não ficar restrito a um unico 

function podeDirigir(nome, nasc) {
    

var data = new Date();
var anoAtual = data.getFullYear();

// calculando a idade
let idade = anoAtual - nasc;


if (idade >= 18) {
    // primeira verificação
    console.log(`${nome} tem ${idade} anos e ja pode dirigir`)
    
    // segunda verificação
    if (idade > 30) {
        console.log(`com ${idade} anos, aconselhamos comprar um carro zero`)
    }
    else {
        console.log(`aconselhamos a comprar um carro usado`)
    }
}
// caso a primeira verificação não se conclua, o codigo vai pular direto pra esse codigo
else {
    console.log(nome + ' não pode dirigir, apenas quando tiver 18 anos :<')
}
}

podeDirigir('joão', 1990);
podeDirigir('marcelo', 2000);
podeDirigir('mariana', 2015);

