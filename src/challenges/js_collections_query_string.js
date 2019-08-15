export default query => Object.keys(query).sort()
  .reduce((acc, key) => `${acc}${acc ? `&${key}` : key}=${query[key]}`, '');
