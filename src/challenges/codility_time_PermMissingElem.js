export default (A) => {
  const newArr = A.slice().sort();
  const n = A.length;
  const [a] = newArr;
  const sum = (n + 1) * (a * 2 + n) / 2;
  return sum - A.reduce((acc, num) => acc + num);
};
