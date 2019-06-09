/* eslint-disable no-console */
// eslint-disable-next-line object-curly-newline
import { l, head, tail, isEmpty, isList } from 'hexlet-pairs-data';

const searchZeros = (tree) => {
  const iter = (list, acc) => {
    if (isEmpty(list)) {
      return acc;
    }

    const current = head(list);
    const rest = tail(list);
    if (!isList(current)) {
      const newAcc = current === 0 ? acc + 1 : acc;
      return iter(rest, newAcc);
    }
    return iter(rest, iter(current, acc));
  };
  return iter(tree, 0);
};

const hasZero = (list) => {
  if (isEmpty(list)) {
    return false;
  }

  const current = head(list);
  const rest = tail(list);
  if (!isList(current)) {
    if (current === 0) {
      return true;
    }
  } else if (hasZero(current)) {
    return true;
  }
  return hasZero(rest);
};

console.log(hasZero(l(1, 3, l(5, l(9), 3), 10)));
console.log(hasZero(l(1, l(l(5, 100), 0), 10)));

console.log(searchZeros(l(1, 3, l(5, l(9), 3), 10)));
console.log(searchZeros(l(0, l(l(0, 100), 0), 10)));
