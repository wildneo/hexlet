import binaryGap from '../binaryGap';
/*eslint-disable*/

describe('Binary Gap', () => {
  test('zero at the beginning', () => {
    expect(binaryGap(259)).toBe(6);
  });
  test('zero at the end', () => {
    expect(binaryGap(14)).toBe(0);
  });
  test('not contain zeros', () => {
    expect(binaryGap(268435455)).toBe(0);
  });
  test('max range', () => {
    expect(binaryGap(2147483647)).toBe(0);
  });
  test('stand alone', () => {
    expect(binaryGap(32)).toBe(0);
  });
});
