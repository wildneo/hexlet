import path from 'path';
import os from 'os';
import fs from 'fs';
import watch from '../async_code_watcher';

const filepath = path.join(os.tmpdir(), 'example');

beforeAll(() => {
  fs.writeFileSync(filepath, '');
});

// test('watch', (done) => {
//   const id = watch('/undefined', 4, (err) => {
//     clearInterval(id);
//     expect(err).not.toBeNull();
//     done();
//   });
// });

test('watch 2', (done) => {
  const id = watch(filepath, 500, (err) => {
    clearInterval(id);
    expect(err).toBeNull();
    done();
  });
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
});

test('watch 3', (done) => {
  const id = watch('./package.json', 100, () => {
    expect(true).toBe(false);
  });
  setTimeout(() => {
    clearInterval(id);
    done();
  }, 200);
});

test('watch 4', (done) => {
  let count = 0;
  const id = watch(filepath, 500, (err) => {
    count += 1;
    if (count === 2) {
      clearInterval(id);
      expect(err).toBeNull();
      done();
    }
  });
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
  setTimeout(() => fs.appendFileSync(filepath, 'uhe'), 1100);
});

test('watch 5: cb should be called once', (done) => {
  let count = 0;
  const id = watch(filepath, 500, () => {
    count += 1;
  });
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 300);
  setTimeout(() => {
    clearInterval(id);
    expect(count).toBe(1);
    done();
  }, 1100);
});

// test('watch 6', (done) => {
//   const id = watch(filepath, 500, () => {
//     expect(id._idleNext).toBeNull(); //eslint-disable-line
//     clearInterval(id);
//     done();
//   });
//   setTimeout(() => fs.unlink(filepath, () => {}), 700);
// });
