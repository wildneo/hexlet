import { promises as fs } from 'fs';
import path from 'path';
import { sumBy } from 'lodash';

// export const getDirectorySize = (src) => {
//   const sumOfFiles = statsPromises => Promise.all(statsPromises)
//     .then(entries => entries.filter(entry => entry.isFile()))
//     .then(files => sumBy(files, 'size'));
//
//   return fs.readdir(src)
//     .then(items => items.map(item => fs.stat(path.join(src, item))))
//     .then(sumOfFiles);
// };

export const getDirectorySize = dirPath => fs.readdir(dirPath)
  .then(names => names.map(name => fs.stat(path.join(dirPath, name))))
  .then(promises => Promise.all(promises))
  .then(stats => stats.filter(stat => stat.isFile()))
  .then(files => sumBy(files, 'size'));

export default getDirectorySize;
