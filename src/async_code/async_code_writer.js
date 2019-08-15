import fs from 'fs';

export default (path, data, cd) => {
  fs.writeFile(path, data, 'utf8', (err) => {
    if (err) {
      throw err;
    }
    cd();
  });
};
