import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from './interfaceCSV';
import * as fs from 'fs';

export const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  let append = false
  const tamanhoArquivo = fs.readFileSync(filePath)
  if(tamanhoArquivo.length != 0){append = true}
 
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'nome' },
      {id: 'peso', title: 'peso'},
      { id: 'valor', title: 'valor' },
      {id: 'quantidade', title: 'quantidade'},
      
    ],
    append
        
  });

  console.log("\n")
  return csvWriter.writeRecords(data);

};
