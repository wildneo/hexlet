import magic from '../js_prototypes/js_prototypes_magic';
/*eslint-disable*/

test('magic', () => {
  expect(magic() + 0).toBe(0);
  expect(magic() + 1).toBe(1);

  magic(4, 5);

  expect(magic(5, 2, -8) + 2).toBe(1);
  expect(magic(1, 2)(3, 4, 5)(6)(7, 10) - 8).toBe(30);
  expect(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7).toBe(20);

  magic(1, 3, 4);
  expect(magic(5) + 1).toBe(6);
});