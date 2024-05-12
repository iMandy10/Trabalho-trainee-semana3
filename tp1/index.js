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
const controleEstoque_1 = require("./controller/controleEstoque");
const prompt = require('prompt-sync')({ sigint: true });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let opcao = 0;
        (0, controleEstoque_1.iniciar)();
        while (opcao != 10) {
            console.log("Digite a opção desejada ou 0 para retomar ao início.");
            switch (opcao) {
                case 0:
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                case 1:
                    let novoItem = {
                        nome: prompt("Digite o nome: ").toLowerCase(),
                        peso: parseFloat(prompt("Digite o peso(kg): ")),
                        valor: parseFloat(prompt("Digite o valor: ")),
                        quantidade: parseFloat(prompt("Digite a quantidade: "))
                    };
                    yield (0, controleEstoque_1.adicionar)(novoItem);
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                case 2:
                    const nomeRemover = prompt("Digite o nome do item que deseja remover: ").toLowerCase();
                    yield (0, controleEstoque_1.remover)(nomeRemover);
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                case 3:
                    yield (0, controleEstoque_1.listar)();
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                case 4:
                    yield (0, controleEstoque_1.valor)();
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                case 5:
                    yield (0, controleEstoque_1.peso)();
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                case 6:
                    yield (0, controleEstoque_1.mediaValor)();
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                case 7:
                    yield (0, controleEstoque_1.mediaPeso)();
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                case 8:
                    yield (0, controleEstoque_1.quantItens)();
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                case 9:
                    yield (0, controleEstoque_1.quantProdutos)();
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
                default:
                    console.log("Uma opção inválida foi digitada, por favor, digite novamente.");
                    opcao = parseInt(prompt("Digite a opção desejada: "));
                    break;
            }
        }
    });
}
main();
