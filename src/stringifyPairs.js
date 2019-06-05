/* eslint-disable no-console */

const split = (str, sep) => {
  let substr = '';
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === sep) {
      arr[arr.length] = substr;
      substr = '';
      i += 1;
    }
    substr += str[i] ? str[i] : '';
  }
  arr[arr.length] = substr;
  return arr;
};

export const cons = (car, cdr) => {
  const pair = () => `${car}\0${cdr}`;
  pair.pair = true;
  return pair;
};

export const isPair = pair => typeof pair === 'function' && pair.pair;

export const checkPair = (pair) => {
  if (!isPair(pair)) {
    throw new Error('Argument must be pair');
  }
};

export const car = (pair) => {
  checkPair(pair);
  return split(pair(), '\0')[0];
};

export const cdr = (pair) => {
  checkPair(pair);
  return split(pair(), '\0')[1];
};

console.log(cons('computer', 'science')()); // => computer\0science
console.log(car(cons('computer', 'science'))); // computer
console.log(cdr(cons('computer', 'science'))); // science
