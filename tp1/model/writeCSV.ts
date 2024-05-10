
import { Data } from './interfaceCSV';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

 export const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'NOME MERCADORIA' },
      { id: 'peso', title: 'PESO' },
      {id: 'valor', title: 'VALOR'},
      {id: 'quantidade', title: 'QUANTIDADE'},
    ],
    append: true, 
  });

  return csvWriter.writeRecords(data);
};
