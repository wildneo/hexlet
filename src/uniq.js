const uniq = arr => (
  arr.reduce((acc, value) => (
    acc.includes(value) ? acc : acc.concat(value)
  ), [])
);
export default uniq;

const testArr1 = [2, 1, 2, 3];
const testArr2 = [-2, 20, 0, 4, 20, 0];

console.log(uniq(testArr1));
console.log(uniq(testArr2));
