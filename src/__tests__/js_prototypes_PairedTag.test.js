import PairedTag from '../js_prototypes_PairedTag';
/*eslint-disable*/

test('Paired Tag', () => {
  const actual = new PairedTag('html', {}, '', [
    new PairedTag('head', {}, '', [
      new PairedTag('title', {}, 'hello, hexlet!'),
    ]),
    new PairedTag('body', {}, '', [
      new PairedTag('h1', { class: 'header' }, 'html builder example'),
      new PairedTag('div', {}, '', [
        new PairedTag('span', {}, 'span text'),
        new PairedTag('span', {}, 'span text2'),
      ]),
    ]),
  ]);
  const expected = `<html><head><title>hello, hexlet!</title></head><body><h1 class="header">html builder example</h1><div><span>span text</span><span>span text2</span></div></body></html>`;
  expect(actual.toString()).toBe(expected);
});
