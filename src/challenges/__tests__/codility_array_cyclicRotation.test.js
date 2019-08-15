import cyclicRotation from '../codility_array_cyclicRotation';

describe('Cyclic rotation', () => {
  test('#1 empty array', () => {
    expect(cyclicRotation([], 0)).toEqual([]);
    expect(cyclicRotation([], 10)).toEqual([]);
  });

  test('#2 one element', () => {
    expect(cyclicRotation([-3], 5)).toEqual([-3]);
  });

  test('#3 two elements', () => {
    expect(cyclicRotation([2, 4], 7)).toEqual([4, 2]);
  });

  test('#4 two elements', () => {
    expect(cyclicRotation([2, 4], 7)).toEqual([4, 2]);
    expect(cyclicRotation([2, 4], 1)).toEqual([4, 2]);
  });

  test('#5 Small functional tests, K > N', () => {
    expect(cyclicRotation([1, 1, 2, 3, 5], 42)).toEqual([3, 5, 1, 1, 2]);
  });
});
