import { promises as fs } from 'fs';

export const touch = filepath => fs.access(filepath)
  .catch(() => fs.writeFile(filepath));

export default touch;
