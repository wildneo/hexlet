
export default arr => (
  arr.reduce((acc, value) => (
    acc.includes(value) ? acc : acc.concat(value)
  ), [])
);
