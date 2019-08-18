import fs from 'fs';
import waterfall from 'async/waterfall';


export default (inputPath1, inputPath2, outputPath, cb) => waterfall([
  callback => fs.readFile(inputPath1, 'utf-8', callback),
  (data1, callback) => {
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => callback(error2, data1, data2));
  },
  (data1, data2, callback) => {
    fs.writeFile(outputPath, `${data1}${data2}`, error3 => callback(error3));
  },
], cb);
