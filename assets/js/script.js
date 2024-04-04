const nome = window.prompt('Qual éo seu nome?\n');
const idade = parseInt(window.prompt('Digite sua idade:'))


if (idade >= 18) {
    document.write(`bem vindo ${nome}`)
}

else if (idade >= 15){
    document.write(`bem vindo ${nome}`)
}

else{
    alert('erro')
}