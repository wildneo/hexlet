import fs from 'fs';

export default (src, dest, cb) => {
  fs.readFile(src, 'utf8', (err1, data) => {
    if (err1) {
      cb(err1);
      return;
    }
    fs.writeFile(dest, data, (err2) => {
      if (err2) {
        cb(err2);
        return;
      }
      fs.unlink(src, cb);
    });
  });
};
