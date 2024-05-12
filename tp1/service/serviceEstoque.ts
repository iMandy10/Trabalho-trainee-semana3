import { writeCSV } from "../model/writeCSV";
import { readCSV } from "../model/readCSV";
import { Data } from '../model/interfaceCSV';
const prompt = require('prompt-sync')({sigint: true});
const filePath = './model/estoque.csv';
const letra = /^[a-zA-Z\s]*$/;
import * as fs from 'fs';

export class EstoqueService{

 static async inserirItem(dados:Data){
    let itens= await readCSV(filePath);
    //let itemExistente = itens.findIndex(item => item.nome === dados.nome);
    let itemExistente = itens.findIndex((item) => {
        return item.nome === dados.nome;
    })
         if(itemExistente!== -1){
        throw new Error("Esse item já existe no nosso banco de dados.")
    }
        else if(isNaN(dados.peso)|| isNaN(dados.quantidade)|| isNaN(dados.valor)){
            throw new Error("Verifique os dados enviados. Lembrando que em peso, valor e caractere devem ser apenas números e '.'")
        
        }
        else if(!dados.nome || !letra.test(dados.nome)){
            throw new  Error ("O nome é inválido. Por favor, revise os dados.")
        }
        else if(dados.peso <= 0 || dados.quantidade <=0 || dados.valor <=0){
            throw new Error("Verifique os dados enviados, os dados de peso, quantidade e valor precisam ser maior do que 0!")
        }

        else {
            let resposta = prompt("Confirme se você digitou o peso do produto em kg(S/N): ").toUpperCase()
           if (resposta !=="S" && resposta !== "N"){
            throw new Error("Resposta inválida. Para confirmar se o peso está em kg, digite 'S' ou 'N'.")
           }
           else if(resposta ==="N"){
            throw new Error("Unidade de medida inválida para peso.")

        }else{
            await writeCSV(filePath, [dados]);
        }
        }
    }


    static async listarItens(){
        let itens = await readCSV(filePath);
        if(itens.length === 0){
            throw new Error ("Não há itens para listar")
        }
        else{
        console.log(itens);
        }  
    }
    static async  clearCSV(filePath: string): Promise<void> {
        try {
            // Truncar o arquivo CSV para limpar o conteúdo
            const linha = Buffer.byteLength('nome,peso,valor,quantidade\n', 'utf8');
            await fs.promises.truncate(filePath, linha);
            console.log("Conteúdo do arquivo CSV foi limpo com sucesso.");
        } catch (error) {
            console.error("Erro ao limpar o arquivo CSV:", error);
        }
    }
    static async removerItens(identificacao: string) {
        if (typeof identificacao !== 'string') {
            throw new Error("Confira se o nome do item está escrito corretamente");
        }
    
        let bancoDados = await readCSV(filePath);
        let indice = bancoDados.findIndex((item) => item.nome === identificacao);
    
        if (indice === -1) {
            throw new Error("Esse item não existe no nosso banco de dados");
        } else {
            console.log("Dados a serem removidos são:")
            console.log(bancoDados[indice])
            let confirmacao = prompt("Você deseja prosseguir com a operação? S/N: ").toUpperCase();
    
            if (confirmacao !== "S" && confirmacao !== "N") {
                throw new Error("Resposta inválida para confirmação. Digite apenas 'S' ou 'N'.");
            } else if (confirmacao === "N") {
                console.log("Você optou por não prosseguir com a operação.");
            } else {
                bancoDados.splice(indice, 1);
                await this.clearCSV(filePath)
                await writeCSV(filePath, bancoDados);
                console.log("O item desejado foi deletado com sucesso.");
            }
        }
    }
    
    static async valorTotal(){
        const bancoDados = await readCSV(filePath);
        if(bancoDados.length === 0){
            throw new Error("Não há nenhum item no estoque.")
        }
        else{
        const total= bancoDados.reduce((acumulador,valor)=> acumulador + (valor.valor * valor.quantidade),0)
        return total;
        }
    }
   static async pesoTotal(){
        const bancoDados = await readCSV( filePath  );
        if(bancoDados.length === 0){
            throw new Error("Não há nenhum item no estoque.")
        }
        else{
            const peso = bancoDados.reduce((acumulador,item)=> acumulador + (item.peso * item.quantidade),0)
           return peso;
            }
    }
    static async mediaDeValor(){
        const bancoDados = await readCSV(filePath);
        if(bancoDados.length === 0){
            throw new Error("Não há nenhum item no estoque.")
        }
        else{
            let somaItens= bancoDados.reduce((acumulador,valor)=> acumulador + (+valor.valor * +valor.quantidade),0)
            let quantidadeItens = bancoDados.reduce((acumulador,item)=> acumulador + +item.quantidade,0)
            const media = somaItens/quantidadeItens
            return media;
            }       
    }
    static async mediaDePeso(){
        const bancoDados = await readCSV(filePath);
        if(bancoDados.length === 0){
            throw new Error("Não há nenhum item no estoque.")
        }
        else{
            let pesosItens=bancoDados.reduce((acumulador,item)=> acumulador + (+item.peso * +item.quantidade),0)
            let quantidadeItens = bancoDados.reduce((acumulador,item)=> acumulador + +item.quantidade,0)
            const peso = pesosItens/quantidadeItens     
            return peso;
            }       
    }
    static async quantidadeItens(){
        const bancoDados = await readCSV(filePath);
        if(bancoDados.length === 0){
            throw new Error("Não há nenhum item no estoque.")
        }
        else{
        const quantidadeItens = bancoDados.reduce((acumulador,item)=> acumulador + +item.quantidade,0)
        return quantidadeItens;
        }
    }
    static async quantidadeProdutos(){const bancoDados = await readCSV(filePath);
    if(bancoDados.length === 0){
        throw new Error("Não há nenhum item no estoque.")
    }
    else{
        const quantidadeProdutos = bancoDados.length
        return quantidadeProdutos;
    }

}
}
