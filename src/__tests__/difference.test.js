import difference from '../difference';
/*eslint-disable*/

test('difference', () => {
  const result1 = difference(new Set([2, 1]), new Set([2, 3]));
  expect(result1).toEqual(new Set([1]));

  const result2 = difference(new Set([]), new Set([2, 3]));
  expect(result2).toEqual(new Set([]));

  const result3 = difference(new Set([2, 1]), new Set([]));
  expect(result3).toEqual(new Set([2, 1]));

  const set1 = new Set(['one', false, 3]);
  const set2 = new Set([5, 3, true, 'two']);
  const result4 = difference(set1, set2);
  expect(result4).toEqual(new Set(['one', false]));
  expect(set1).toEqual(new Set(['one', false, 3]));
  expect(set2).toEqual(new Set([5, 3, true, 'two']));
});