import { promises as fs } from 'fs';

const getTypeName = stat => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (paths) => {
  const [first, ...rest] = paths;
  const result = [];

  let promise = fs.stat(first)
    .then(data => result.push(getTypeName(data)))
    .catch(() => result.push(null));

  rest.forEach((path) => {
    promise = promise.then(() => fs.stat(path))
      .then(data => result.push(getTypeName(data)))
      .catch(() => result.push(null));
  });
  return promise.then(() => result);
};

export default getTypes;
