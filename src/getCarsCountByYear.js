export default (collection) => {
  const iter = (acc, rest) => {
    if (rest.length === 0) {
      return acc;
    }

    const [{ year: propName }, ...newRest] = rest;
    const { [propName]: value = 0 } = acc;

    const newAcc = { ...acc, [propName]: value + 1 };
    return iter(newAcc, newRest);
  };

  return iter({}, collection);
};
