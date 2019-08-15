const magic = (...args) => {
  const sum = args.reduce((acc, arg) => acc + arg, 0);
  const inner = (...newArgs) => magic(sum, ...newArgs);

  inner.valueOf = () => sum;

  return inner;
};

export default magic;
