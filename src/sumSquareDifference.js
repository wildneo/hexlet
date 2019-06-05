export const sumSquareDifference = (n) => {
  if (!(typeof n === 'number') || n > 10) {
    throw new Error('Argument must be a natural number no more than 10');
  }
  if (n < 2) {
    return 0;
  }
  const iter = (count, acc1, acc2) => {
    if (count === 0) {
      return acc1 ** 2 - acc2;
    }
    return iter(count - 1, acc1 + count, acc2 + count ** 2);
  };
  return iter(n, 0, 0);
};

console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(20));     // Error: Argument must be a natural number no more than 10
console.log(sumSquareDifference('10'));   // Error: Argument must be a natural number no more than 10
