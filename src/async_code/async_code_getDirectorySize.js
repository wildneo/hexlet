import fs from 'fs';
import path from 'path';
import { map as amap } from 'async';
import { sumBy } from 'lodash';

export default (src, cb) => {
  fs.readdir(src, (err1, entries) => {
    if (err1) {
      cb(err1);
      return;
    }
    const pathes = entries.map(item => path.join(src, item));
    amap(pathes, fs.stat, (err2, results) => {
      const files = results.filter(item => item.isFile());
      cb(err2, sumBy(files, 'size'));
    });
  });
};
