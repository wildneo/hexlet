export const invertCase = (str) => {
  return _join(_map(_split(str), 
  e => e === e.toUpperCase() 
    ? e.toLowerCase() 
    : e.toUpperCase()).join('')
  );
};

function _split(str) {
  const iter = (count, acc) => {
    if (count >= str.length) {
      return acc;
    }
    acc[acc.length] = str[count];
    return iter(count + 1, acc);
  };
  return iter(0, []);
};

function _join(arr) {
  const iter = (count, acc) => {
    return count === arr.length ? acc : iter(count + 1, acc + arr[count]);
  };
  return iter(0, '');
};

function _map(arr, fn) {
  const iter = (count, acc) => {
    if (count === arr.length) {
      return acc;
    }
    acc[acc.length] = fn(arr[count]);
    return iter(count + 1, acc);
  };
  return iter(0, []);
};

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS')); // i LOvE js
