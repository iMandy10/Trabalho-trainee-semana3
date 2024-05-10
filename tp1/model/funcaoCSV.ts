
import{readCSV} from './readCSV';
import{writeCSV} from './writeCSV';
const filePath = './estoque.csv';

const main = async () => {
  try {
    const data = await readCSV(filePath);
    console.log('Dados lidos:', data);

    await writeCSV( filePath, data);
    console.log('Dados escritos em estoque.csv');
  } catch (error) {
    console.error('Erro:', error);
  }
};


