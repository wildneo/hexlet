
const wordsCount = (words, stopWords) => {
  return words.map(e => e.toLowerCase()).filter(e => !stopWords.includes(e));
};

const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];

console.log(wordsCount(words, stopWords));
