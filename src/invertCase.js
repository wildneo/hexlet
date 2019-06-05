/* eslint-disable no-console */

const split = (str) => {
  const iter = (count, acc) => {
    if (count >= str.length) {
      return acc;
    }
    acc[acc.length] = str[count];
    return iter(count + 1, acc);
  };
  return iter(0, []);
};

const join = (arr) => {
  const iter = (count, acc) => (
    count === arr.length
      ? acc
      : iter(count + 1, acc + arr[count])
  );
  return iter(0, '');
};

const map = (arr, fn) => {
  const iter = (count, acc) => {
    if (count === arr.length) {
      return acc;
    }
    acc[acc.length] = fn(arr[count]);
    return iter(count + 1, acc);
  };
  return iter(0, []);
};

const invertCase = str => (
  join(map(split(str), e => (
    e === e.toUpperCase()
      ? e.toLowerCase()
      : e.toUpperCase()
  )))
);

export default invertCase;

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS')); // i LOvE js
