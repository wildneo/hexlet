import os from 'os';
import { promises as fs } from 'fs';
import _ from 'lodash';
import { touch } from '../async_code_touch';

test('touch 1', () => {
  const filepath = `${os.tmpdir()}/example`;
  const promise = fs.unlink(filepath)
    .catch(_.noop)
    .then(() => touch(filepath))
    .then(() => fs.access(filepath, 'utf-8'));
  return expect(promise).resolves.toBe();
});

test('touch 2', () => {
  const filepath = `${os.tmpdir()}/example`;
  const promise = fs.unlink(filepath)
    .catch(_.noop)
    .then(() => fs.writeFile(filepath, 'content'))
    .then(() => touch(filepath))
    .then(() => fs.readFile(filepath, 'utf-8'));
  return expect(promise).resolves.toBe('content');
});
