/* eslint-disable no-console */
import fs from 'fs';
import print from '../async_code/async_code_printer';

test('readFile', (done) => {
  const results = [];
  const { log } = console;
  console.log = jest.fn((...args) => {
    results.push(...args);
    log(...args);
  });
  print(`${__dirname}/async_code_printer.test.js`);

  setTimeout(() => {
    const expected = [fs.readFileSync(`${__dirname}/async_code_printer.test.js`, 'utf-8')];
    expect(results).toEqual(expected);
    done();
  }, 2000);
});
