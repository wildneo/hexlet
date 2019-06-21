const oddOccurrencesInArray = (arr) => {
  return arr.filter((e, i) => (i % 2));
};

export default oddOccurrencesInArray;

const testArr = [9, 3, 9, 3, 9, 7, 9];

console.log(oddOccurrencesInArray(testArr));
