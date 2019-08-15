import getDirectorySize from '../async_code/async_code_getDirectorySize';

test('getDirectorySize', (done) => {
  getDirectorySize('/undefined', (err) => {
    expect(err).not.toBeNull();
    done();
  });
});

test('getDirectorySize2', (done) => {
  getDirectorySize('./', (err, size) => {
    expect(err).toBeNull();
    expect(size).toBe(329697);
    done();
  });
});
