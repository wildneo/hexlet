/* eslint-disable no-console */
import fs from 'fs';

export default filepath => (
  fs.readFile(filepath, 'utf8', (err, data) => (
    err
      ? console.log(err)
      : console.log(data)
  ))
);
