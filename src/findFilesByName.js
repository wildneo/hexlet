import path from 'path';

const findFilesByName = (node, substr) => {
  const iter = (n, pathAcc, acc) => {
    const { type, name, children } = n;
    const newPathAcc = path.join(pathAcc, name);

    if (type === 'file' && name.includes(substr)) {
      return [...acc, newPathAcc];
    }
    return type === 'directory'
      ? children.reduce((iAcc, nn) => iter(nn, newPathAcc, iAcc), acc)
      : acc;
  };
  return iter(node, '', []);
};

export default findFilesByName;
