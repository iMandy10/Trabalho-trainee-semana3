
import { Data } from './interfaceCSV';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

 export const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'nome' },
      { id: 'peso', title: 'peso' },
      {id: 'valor', title: 'valor'},
      {id: 'quantidade', title: 'quantidade'},
    ],
    append: true, 
  });

  return csvWriter.writeRecords(data);
};
