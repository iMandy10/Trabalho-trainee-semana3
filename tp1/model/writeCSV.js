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
exports.writeCSV = void 0;
const csv_writer_1 = require("csv-writer");
const writeCSV = (filePath, data) => __awaiter(void 0, void 0, void 0, function* () {
    const csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
        path: filePath,
        header: [
            { id: 'nome', title: 'nome' },
            { id: 'peso', title: 'peso' },
            { id: 'valor', title: 'valor' },
            { id: 'quantidade', title: 'quantidade' },
        ],
    });
    return csvWriter.writeRecords(data);
});
exports.writeCSV = writeCSV;
