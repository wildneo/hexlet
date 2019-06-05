/* eslint-disable no-console */

/**
 * Build pair
 * @example
 * const pair = cons(5, 8);
 * @param {number} a first element
 * @param {number} b second element
 */
export const cons = (a, b) => (2 ** a) * (3 ** b);

/**
 * Get car (first element) from pair
 * @example
 * const pair = cons(5, 8);
 * cdr(pair) // 5
 * @param {number} pair
 */
export const car = (pair) => {
  const f = (num, acc) => (
    num > 1
      ? f(num / 2, acc + 1)
      : acc);
  return pair % 3
    ? f(pair, 0)
    : car(pair / 3);
};

/**
 * Get cdr (second element) from pair
 * @example
 * const pair = cons(5, 8);
 * cdr(pair) // 8
 * @param {number} pair
 */
export const cdr = (pair) => {
  const f = (num, acc) => (
    num > 1
      ? f(num / 3, acc + 1)
      : acc);
  return pair % 2
    ? f(pair, 0)
    : cdr(pair / 2);
};

/**
 * Convert pair to string
 * @example
 * toString(cons(5, 8)); // (5, 8)
 * @param {number} pair
 */
export const pairToString = pair => (
  `(${car(pair)}, ${cdr(pair)})`
);

console.log(car(cons(5, 8)));
console.log(cdr(cons(5, 8)));
console.log(pairToString(cons(5, 8)));
