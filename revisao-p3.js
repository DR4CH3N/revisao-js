let nome = document.getElementById("nome").value;
let nasc = document.getElementById("nasc").value;

var data = new Date();
var ano = data.getFullYear();

let idade = ano - nasc;
console.log(idade);

// query selector é um seletor geral de IDs, classes, tags, etc...
// caso classe voce coloca .form
// caso ID voce coloca #form e entre outros
let form = document.querySelector("form")

// quando o botão "submit" for disparado no formulario usando o 'addEventListener', ele vai criar uma função para esse evento no qual vai realizar o codigo inteiro abaixo:
form.addEventListener('submit', function(event) {

    // event.preventDefault vai previnir o comportamento padrão do submit (no caso iria dar refresh na pagina)
    event.preventDefault();


let nome = document.getElementById("nome").value;
let nasc = document.getElementById("nasc").value;
var data = new Date();
var ano = data.getFullYear()
let idade = ano - nasc

    if (idade >=18) {
        conteudo.innerHTML = `<p>${nome} tem ${idade} anos e ja pode dirigir`
    } else {
        conteudo.innerHTML = `<p>${nome} só ´pdera dirigir quando fizer 18 anos`
    }
});