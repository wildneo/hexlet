export default (str) => {
  const result = [];
  let firstWord = '';
  let state = 'newLine'; // newLine,
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    // eslint-disable-next-line default-case
    switch (state) {
      case 'newLine':
        if (symbol !== ' ') {
          state = 'word';
          firstWord += symbol;
        }
        break;
      case 'word':
        if (symbol !== ' ') {
          firstWord += symbol;
        } else {
          state = 'otherWords';
          result.push(firstWord);
          firstWord = '';
        }
        break;
      case 'otherWords':
        if (symbol === '\n') {
          state = 'newLine';
        }
        break;
    }
  }
  return result;
};
