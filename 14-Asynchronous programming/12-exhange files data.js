/*Реализуйте и экспортируйте асинхронную функцию exchange(), которая обменивает содержимое двух файлов.

import { exchange } from './file.js';
 
exchange('/myfile1', '/myfile2');
*/

export const exchange = async (filepath1, filepath2) => {
  const reading1 = fsp.readFile(filepath1, 'utf-8');
  const reading2 = fsp.readFile(filepath2, 'utf-8');
  const [data1, data2] = await Promise.all([reading1, reading2]);
  const writing1 = fsp.writeFile(filepath1, `${data2}`);
  const writing2 = fsp.writeFile(filepath2, `${data1}`);
  await Promise.all([writing1, writing2]);
};
