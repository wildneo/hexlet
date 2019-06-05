/* eslint-disable no-console */

export const make = (a, b, c) => {
  const triple = (msg) => {
    switch (msg) {
      case 1:
        return a;
      case 2:
        return b;
      case 3:
        return c;
      default:
        throw new Error('error');
    }
  };
  return triple;
};
export const get1 = triple => triple(1);
export const get2 = triple => triple(2);
export const get3 = triple => triple(3);

export const tripleToString = triple => (
  `(${get1(triple)}, ${get2(triple)}, ${get3(triple)})`
);

console.log(tripleToString(make(12, 'Hello!', 20)));
