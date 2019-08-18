import { promises as fs } from 'fs';

export const exchange = async (filepath1, filepath2) => {
  const data1 = await fs.readFile(filepath1, 'utf-8');
  const data2 = await fs.readFile(filepath2, 'utf-8');
  await fs.writeFile(filepath1, data2);
  await fs.writeFile(filepath2, data1);
};

export default exchange;
