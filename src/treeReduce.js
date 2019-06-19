
const reduce = (fn, node, acc) => {
  const { type, children } = node;
  const newAcc = fn(acc, node);

  return type === 'directory'
    ? children.reduce((iAcc, n) => reduce(fn, n, iAcc), newAcc)
    : newAcc;
};

export default reduce;
