import fs from 'fs';
import path from 'path';
import async from 'async';
import _ from 'lodash';

export default (src, cb) => {
  fs.readdir(src, (err1, files) => {
    if (err1) {
      cb(err1);
      return;
    }
    const newFiles = files.map(file => path.join(src, file));
    console.log(newFiles);
    async.map(newFiles, fs.stat, (err2, results) => {
      // console.log(results);
      cb(err2, _.sumBy(results, 'size'));
    });
  });
};
