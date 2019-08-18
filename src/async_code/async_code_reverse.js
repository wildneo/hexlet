import { promises as fs } from 'fs';

const reverseLines = data => data.split('\n').reverse().join('\n');

export const reverse = filepath => fs.readFile(filepath, 'utf-8')
  .then(reverseLines)
  .then(data => fs.writeFile(filepath, data));

export default reverse;
