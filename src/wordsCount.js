
export default (words, stopWords) => (words
  .map(value => value.toLowerCase())
  .filter(value => !stopWords.includes(value))
  .reduce((acc, value) => (acc.has(value)
    ? acc.set(value, acc.get(value) + 1)
    : acc.set(value, 1)
  ), new Map())
);
