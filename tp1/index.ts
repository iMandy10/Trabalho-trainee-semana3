import {iniciar, adicionar, listar, remover, valor, peso, mediaValor, mediaPeso, quantItens, quantProdutos} from './controller/controleEstoque'
import { Data } from './model/interfaceCSV';
const prompt = require('prompt-sync')({sigint: true});


async function main () {
    let opcao:number = 0
    while(opcao !=10){
    try{
iniciar()  
console.log("Digite a opção desejada ou 0 para retomar ao início.")
switch(opcao){
    case 0:
        opcao = parseInt(prompt("Digite a opção desejada: "))
        break;

    case 1: 
    let novoItem={
        nome: prompt("Digite o nome: "),
         peso: parseFloat(prompt("Digite o peso(kg): ")),
         valor: parseFloat(prompt("Digite o valor: ")),
         quantidade: parseFloat(prompt("Digite a quantidade: "))
    } as Data
    await adicionar(novoItem)
    opcao = parseInt(prompt("Digite a opção desejada: "));
    break;

    case 2:
        const nomeRemover = prompt("Digite o nome do item que deseja remover: ")
        await remover(nomeRemover)
        opcao = parseInt(prompt("Digite a opção desejada: "));
        break;

    case 3:
        await listar()
        opcao = parseInt(prompt("Digite a opção desejada: "));
        break;

    case 4:
        await valor()
        opcao = parseInt(prompt("Digite a opção desejada: "));
        break;

    case 5:
        await peso()
        opcao = parseInt(prompt("Digite a opção desejada: "));
        break;

    case 6:
        await mediaValor()
        opcao = parseInt(prompt("Digite a opção desejada: "));
        break;

    case 7:
        await mediaPeso()
        opcao = parseInt(prompt("Digite a opção desejada: "));
        break;

    case 8:
        await quantItens()
        opcao = parseInt(prompt("Digite a opção desejada: "));
        break;

    case 9:
        await quantProdutos()
        opcao = parseInt(prompt("Digite a opção desejada: "));
        break;

    default:
        console.log("Uma opção inválida foi digitada, por favor, digite novamente.")
        opcao = parseInt(prompt("Digite a opção desejada: "));
        break;
}
}
catch(error){
    console.log("Ocorreu um erro: ",error)
  
}
}
}

main()
