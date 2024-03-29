import lexer from '../lexer';

test('solution 1', () => {
  const data = [
    '  first second\n',
    'hello  my\n',
    'what   who   \n\n',
  ];

  const expected = [
    'first',
    'hello',
    'what',
  ];

  expect(lexer(data.join(''))).toEqual(expected);
});

test('solution 2', () => {
  const data = [
    '\n\n  what who   \n',
    'hellomy\n',
    ' hello who are you\n',
  ];

  const expected = [
    'what',
    'hellomy',
    'hello',
  ];

  expect(lexer(data.join(''))).toEqual(expected);
});

test('solution 3', () => {
  const data = [
    '\n\n  hi   \n',
    'hey how are you doing?\n',
    ' hello who are you',
  ];

  const expected = [
    'hi',
    'hey',
    'hello',
  ];

  expect(lexer(data.join(''))).toEqual(expected);
});

test('solution 4', () => {
  const data = [
    '\n\n  hi   \n',
    'hi how are you doing?\n',
    ' hello who are you',
  ];

  const expected = [
    'hi',
    'hi',
    'hello',
  ];

  expect(lexer(data.join(''))).toEqual(expected);
});
