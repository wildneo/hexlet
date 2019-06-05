export const isPerfect = (num) => {
  if (num === 0) {
    return false;
  }
  const iter = (count, acc) => {
    if (count >= num) {
      return acc;
    }
    acc = num % count ? acc : acc += count;
    return iter(count + 1, acc);
  };
  return num === iter(0, 0);
};

console.log(isPerfect(0)); // false
console.log(isPerfect(100)); // false
console.log(isPerfect(496)); // true
console.log(isPerfect(8128)); // true