import getDirectorySize from '../async_code_getDirectorySize';

test('getDirectorySize', (done) => {
  getDirectorySize('/undefined', (err) => {
    expect(err).not.toBeNull();
    done();
  });
});
