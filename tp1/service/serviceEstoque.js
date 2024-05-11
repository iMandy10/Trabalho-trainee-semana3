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
exports.EstoqueService = void 0;
const writeCSV_1 = require("../model/writeCSV");
const readCSV_1 = require("../model/readCSV");
const prompt = require('prompt-sync')({ sigint: true });
const filePath = './model/estoque.csv';
const letra = /^[a-zA-Z\s]*$/;
class EstoqueService {
    static inserirItem(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            let itens = yield (0, readCSV_1.readCSV)(filePath);
            //let itemExistente = itens.findIndex(item => item.nome === dados.nome);
            let itemExistente = itens.findIndex((item) => {
                return item.nome === dados.nome;
            });
            console.log(itemExistente);
            if (itemExistente !== -1) {
                throw new Error("Esse item já existe no nosso banco de dados.");
            }
            else if (isNaN(dados.peso) || isNaN(dados.quantidade) || isNaN(dados.valor)) {
                throw new Error("Verifique os dados enviados. Lembrando que em peso, valor e caractere devem ser apenas números e '.'");
            }
            else if (!dados.nome || !letra.test(dados.nome)) {
                throw new Error("O nome é inválido. Por favor, revise os dados.");
            }
            else if (dados.peso <= 0 || dados.quantidade <= 0 || dados.valor <= 0) {
                throw new Error("Verifique os dados enviados, os dados de peso, quantidade e valor precisam ser maior do que 0!");
            }
            else {
                let resposta = prompt("Confirme se você digitou o peso do produto em kg(S/N): ").toUpperCase();
                if (resposta !== "S" && resposta !== "N") {
                    throw new Error("Resposta inválida. Para confirmar se o peso está em kg, digite 'S' ou 'N'.");
                }
                else if (resposta === "N") {
                    throw new Error("Unidade de medida inválida para peso.");
                }
                else {
                    yield (0, writeCSV_1.writeCSV)(filePath, [dados]);
                }
            }
        });
    }
    static listarItens() {
        return __awaiter(this, void 0, void 0, function* () {
            let itens = yield (0, readCSV_1.readCSV)(filePath);
            if (itens.length === 0) {
                throw new Error("Não há itens para listar");
            }
            else {
                console.log(itens);
            }
        });
    }
    static removerItens(identificacao) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof identificacao !== 'string') {
                throw new Error("Confira se o nome do item está escrito corretamente");
            }
            let bancoDados = yield (0, readCSV_1.readCSV)(filePath);
            let indice = bancoDados.findIndex((item) => item.nome === identificacao);
            if (indice === -1) {
                throw new Error("Esse item não existe no nosso banco de dados");
            }
            else {
                console.log(`Dados a serem removidos são: ${bancoDados[indice]}`);
                let confirmacao = prompt("Você deseja prosseguir com a operação? S/N: ").toUpperCase();
                if (confirmacao !== "S" && confirmacao !== "N") {
                    throw new Error("Resposta inválida para confirmação. Digite apenas 'S' ou 'N'.");
                }
                else if (confirmacao === "N") {
                    console.log("Você optou por não prosseguir com a operação.");
                }
                else {
                    bancoDados.splice(indice, 1);
                    yield (0, writeCSV_1.writeCSV)(filePath, bancoDados);
                    console.log("O item desejado foi deletado com sucesso.");
                }
            }
        });
    }
    static valorTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            const bancoDados = yield (0, readCSV_1.readCSV)(filePath);
            if (bancoDados.length === 0) {
                throw new Error("Não há nenhum item no estoque.");
            }
            else {
                const total = bancoDados.reduce((acumulador, valor) => acumulador + (valor.valor * valor.quantidade), 0);
                return total;
            }
        });
    }
    static pesoTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            const bancoDados = yield (0, readCSV_1.readCSV)(filePath);
            if (bancoDados.length === 0) {
                throw new Error("Não há nenhum item no estoque.");
            }
            else {
                const peso = bancoDados.reduce((acumulador, item) => acumulador + (item.peso * item.quantidade), 0);
                return peso;
            }
        });
    }
    static mediaDeValor() {
        return __awaiter(this, void 0, void 0, function* () {
            const bancoDados = yield (0, readCSV_1.readCSV)(filePath);
            if (bancoDados.length === 0) {
                throw new Error("Não há nenhum item no estoque.");
            }
            else {
                let somaItens = bancoDados.reduce((acumulador, valor) => acumulador + (+valor.valor * +valor.quantidade), 0);
                let quantidadeItens = bancoDados.reduce((acumulador, item) => acumulador + +item.quantidade, 0);
                const media = somaItens / quantidadeItens;
                return media;
            }
        });
    }
    static mediaDePeso() {
        return __awaiter(this, void 0, void 0, function* () {
            const bancoDados = yield (0, readCSV_1.readCSV)(filePath);
            if (bancoDados.length === 0) {
                throw new Error("Não há nenhum item no estoque.");
            }
            else {
                let pesosItens = bancoDados.reduce((acumulador, item) => acumulador + (+item.peso * +item.quantidade), 0);
                let quantidadeItens = bancoDados.reduce((acumulador, item) => acumulador + +item.quantidade, 0);
                const peso = pesosItens / quantidadeItens;
                return peso;
            }
        });
    }
    static quantidadeItens() {
        return __awaiter(this, void 0, void 0, function* () {
            const bancoDados = yield (0, readCSV_1.readCSV)(filePath);
            if (bancoDados.length === 0) {
                throw new Error("Não há nenhum item no estoque.");
            }
            else {
                const quantidadeItens = bancoDados.reduce((acumulador, item) => acumulador + +item.quantidade, 0);
                return quantidadeItens;
            }
        });
    }
    static quantidadeProdutos() {
        return __awaiter(this, void 0, void 0, function* () {
            const bancoDados = yield (0, readCSV_1.readCSV)(filePath);
            if (bancoDados.length === 0) {
                throw new Error("Não há nenhum item no estoque.");
            }
            else {
                const quantidadeProdutos = bancoDados.length;
                return quantidadeProdutos;
            }
        });
    }
}
exports.EstoqueService = EstoqueService;