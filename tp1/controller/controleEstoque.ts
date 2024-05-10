import {EstoqueService} from '../service/serviceEstoque'
import { Data } from '../model/interfaceCSV';

function moeda(total: number): string {
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
export async function iniciar(){
    console.log("///GERENCIAMENTO DE ESTOQUE///\n")
console.log("-> Escolha como você deseja proseguir no inventário.\n•Para retornar ao início, digite 0\n•Para adicionar um produto, digite 1\n•Para remover um produto, digite 2\n•Para listar o inventário, digite 3\n•Para ver valor total do inventário, digite 4\n•Para ver peso total do inventário, digite 5\n•Para calcular média de valor dos itens, digite 6\n•Para calcular média de peso dos itens, digite 7\n•Para calcular quantidade total de itens, digite 8\n•Para calcular quantidade total de produtos, digite 9.\n•Para encerrar o gerenciamente, digite 10.")
}

export async function adicionar(dados:Data){
    try{
        await EstoqueService.inserirItem(dados)
        console.log(`O produto ${dados.nome} foi adicionado com sucesso no estoque.`);
    }
    catch(error){
        console.log("Ocorreu um erro ao adicionar o produto:", error);
    }
}
export async function listar(){
    try{
        console.log("Os itens do inventário são:\n")
        await EstoqueService.listarItens();
    }
    catch(error){
        console.log("Ocorreu um erro ao listar o inventário: ", error);
    }
    
}
export async function remover(nome:string){
    try{
        await EstoqueService.removerItens(nome);
        
    }
    catch(error){
        console.log("Ocorreu um erro ao remover o produto do inventário: ", error);
    }
}
export async function valor(){
    try{
        const total = await EstoqueService.valorTotal()
        
        let valorFinal = moeda(total)
        console.log(`O valor total do inventário é: ${valorFinal}`);
    }
    catch(error){
        console.log("Ocorreu um erro ao calcular o valor total do inventário: ", error);
    }
}
export async function peso(){
    try{
        const peso = await EstoqueService.pesoTotal()
        console.log(`O peso total dos itens do inventário é: ${peso} kg`);
    }
    catch(error){
        console.log("Ocorreu um erro ao calcular o peso total: ", error);
    }
}
export async function mediaValor(){
    try{

        const media = await EstoqueService.mediaDeValor()
        const valorFinal = moeda(media)      
        console.log(`A média de valor dos itens é: ${valorFinal}`);
    }
    catch(error){
        console.log("Ocorreu um erro ao calcular a média de valor dos itens: ", error);
    }
}
export async function mediaPeso(){
    try{
        const peso = await EstoqueService.mediaDePeso()
        console.log(`A média de pesos por item é: ${peso} kg`);
    }
    catch(error){
        console.log("Ocorreu um erro ao calcular a média de peso dos itens: ", error);
    }
}
export async function quantItens(){
    try{
        const quantidadeItens = await EstoqueService.quantidadeItens()
        console.log(`O total de itens no inventário é: ${quantidadeItens}`);
    }
    catch(error){
        console.log("Ocorreu um erro ao calcular a quantidade total de itens no inventário: ", error);
    }
}
export async function quantProdutos(){
    try{
        const quantidadeProdutos = await EstoqueService.quantidadeProdutos()
        console.log(`A quantidade de produtos é: ${quantidadeProdutos}`);
    }
    catch(error){
        console.log("Ocorreu um erro ao calcular a quantidade total de produtos no inventário: ", error);
    }
}