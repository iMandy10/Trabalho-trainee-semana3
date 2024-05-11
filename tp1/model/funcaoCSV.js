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
const readCSV_1 = require("./readCSV");
const writeCSV_1 = require("./writeCSV");
const filePath = './estoque.csv';
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, readCSV_1.readCSV)(filePath);
        console.log('Dados lidos:', data);
        yield (0, writeCSV_1.writeCSV)(filePath, data);
        console.log('Dados escritos em estoque.csv');
    }
    catch (error) {
        console.error('Erro:', error);
    }
});
