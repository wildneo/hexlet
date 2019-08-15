import { stat } from 'fs';

export default (file1, file2, cb) => {
  stat(file1, (err1, { size: size1 }) => {
    stat(file2, (err2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    });
  });
};
