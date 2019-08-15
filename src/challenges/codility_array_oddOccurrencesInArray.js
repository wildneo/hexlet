// eslint-disable-next-line no-bitwise
export default arr => arr.reduce((acc, n) => (acc ^ n), 0);
