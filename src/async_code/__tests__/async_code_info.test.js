import compareFileSizes from '../async_code_info';

test('compareFileSizes 1', (done) => {
  const filepath = `${__dirname}/async_code_info.test.js`;
  compareFileSizes(filepath, filepath, (_error1, result) => {
    expect(result).toBe(0);
    done();
  });
});

test('compareFileSizes 2', (done) => {
  const filepath1 = `${__dirname}/async_code_info.test.js`;
  const filepath2 = './package.json';
  compareFileSizes(filepath1, filepath2, (_error1, result) => {
    expect(result).toBe(-1);
    done();
  });
});

test('compareFileSizes 3', (done) => {
  const filepath1 = './package.json';
  const filepath2 = `${__dirname}/async_code_info.test.js`;
  compareFileSizes(filepath1, filepath2, (_error1, result) => {
    expect(result).toBe(1);
    done();
  });
});
