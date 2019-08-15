export default (A, K) => {
  const optimalCount = K % A.length;
  const iter = (arr, count) => {
    const rest = arr.slice();
    const num = rest.pop();

    return count > 0 ? iter([num, ...rest], count - 1) : arr;
  };

  return iter(A, optimalCount);
};
