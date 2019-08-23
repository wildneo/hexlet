export default (str) => {
  const result = [];
  let firstWord = '';
  let state = 'newLine'; // newLine, restOfSentense, insideFirstWord
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    switch (state) {
      case 'newLine':
        if (symbol === '\n') {
          state = 'newLine';
          break;
        }
        if (symbol !== ' ') {
          state = 'insideFirstWord';
          firstWord += symbol;
        }
        break;

      case 'insideFirstWord':
        if (symbol === '\n') {
          state = 'newLine';
        } else if (symbol === ' ') {
          state = 'restOfSentense';
        } else {
          firstWord += symbol;
          break;
        }
        result.push(firstWord);
        firstWord = '';
        break;

      case 'restOfSentense':
        if (symbol === '\n') {
          state = 'newLine';
        }
        break;

      default:
        throw new Error(`Unexpected state '${state}'`);
    }
  }
  return result;
};
