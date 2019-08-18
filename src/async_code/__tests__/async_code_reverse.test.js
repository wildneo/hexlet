import os from 'os';
import { promises as fs, readFileSync, mkdtempSync } from 'fs';
import reverse from '../async_code_reverse';

const reverseLines = data => data.split('\n').reverse().join('\n');

test('reverse 1', () => {
  const content = 'one\ntwo';
  const tmpDir = mkdtempSync(`${os.tmpdir()}/`);
  const filepath = `${tmpDir}example`;
  const promise = fs.writeFile(filepath, content)
    .then(() => reverse(filepath))
    .then(() => readFileSync(filepath, 'utf-8'));
  return expect(promise).resolves.toBe(reverseLines(content));
});
