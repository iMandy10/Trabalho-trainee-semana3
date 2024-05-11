"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quantProdutos = exports.quantItens = exports.mediaPeso = exports.mediaValor = exports.peso = exports.valor = exports.remover = exports.listar = exports.adicionar = exports.iniciar = void 0;
const serviceEstoque_1 = require("../service/serviceEstoque");
function moeda(total) {
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function iniciar() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("///GERENCIAMENTO DE ESTOQUE///\n");
        console.log("-> Escolha como você deseja proseguir no inventário.\n•Para retornar ao início, digite 0\n•Para adicionar um produto, digite 1\n•Para remover um produto, digite 2\n•Para listar o inventário, digite 3\n•Para ver valor total do inventário, digite 4\n•Para ver peso total do inventário, digite 5\n•Para calcular média de valor dos itens, digite 6\n•Para calcular média de peso dos itens, digite 7\n•Para calcular quantidade total de itens, digite 8\n•Para calcular quantidade total de produtos, digite 9.\n•Para encerrar o gerenciamente, digite 10.");
    });
}
exports.iniciar = iniciar;
function adicionar(dados) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield serviceEstoque_1.EstoqueService.inserirItem(dados);
            console.log(`O produto ${dados.nome} foi adicionado com sucesso no estoque.`);
        }
        catch (error) {
            console.log("Ocorreu um erro ao adicionar o produto:", error);
        }
    });
}
exports.adicionar = adicionar;
function listar() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Os itens do inventário são:\n");
            yield serviceEstoque_1.EstoqueService.listarItens();
        }
        catch (error) {
            console.log("Ocorreu um erro ao listar o inventário: ", error);
        }
    });
}
exports.listar = listar;
function remover(nome) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield serviceEstoque_1.EstoqueService.removerItens(nome);
        }
        catch (error) {
            console.log("Ocorreu um erro ao remover o produto do inventário: ", error);
        }
    });
}
exports.remover = remover;
function valor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const total = yield serviceEstoque_1.EstoqueService.valorTotal();
            let valorFinal = moeda(total);
            console.log(`O valor total do inventário é: ${valorFinal}`);
        }
        catch (error) {
            console.log("Ocorreu um erro ao calcular o valor total do inventário: ", error);
        }
    });
}
exports.valor = valor;
function peso() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const peso = yield serviceEstoque_1.EstoqueService.pesoTotal();
            console.log(`O peso total dos itens do inventário é: ${peso} kg`);
        }
        catch (error) {
            console.log("Ocorreu um erro ao calcular o peso total: ", error);
        }
    });
}
exports.peso = peso;
function mediaValor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const media = yield serviceEstoque_1.EstoqueService.mediaDeValor();
            const valorFinal = moeda(media);
            console.log(`A média de valor dos itens é: ${valorFinal}`);
        }
        catch (error) {
            console.log("Ocorreu um erro ao calcular a média de valor dos itens: ", error);
        }
    });
}
exports.mediaValor = mediaValor;
function mediaPeso() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const peso = yield serviceEstoque_1.EstoqueService.mediaDePeso();
            console.log(`A média de pesos por item é: ${peso} kg`);
        }
        catch (error) {
            console.log("Ocorreu um erro ao calcular a média de peso dos itens: ", error);
        }
    });
}
exports.mediaPeso = mediaPeso;
function quantItens() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const quantidadeItens = yield serviceEstoque_1.EstoqueService.quantidadeItens();
            console.log(`O total de itens no inventário é: ${quantidadeItens}`);
        }
        catch (error) {
            console.log("Ocorreu um erro ao calcular a quantidade total de itens no inventário: ", error);
        }
    });
}
exports.quantItens = quantItens;
function quantProdutos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const quantidadeProdutos = yield serviceEstoque_1.EstoqueService.quantidadeProdutos();
            console.log(`A quantidade de produtos é: ${quantidadeProdutos}`);
        }
        catch (error) {
            console.log("Ocorreu um erro ao calcular a quantidade total de produtos no inventário: ", error);
        }
    });
}
exports.quantProdutos = quantProdutos;
