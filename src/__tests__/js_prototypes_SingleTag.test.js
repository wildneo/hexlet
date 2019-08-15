import SingleTag from '../js_prototypes/js_prototypes_SingleTag';
/*eslint-disable*/

test('Single Tag', () => {
  expect(new SingleTag('br', {}).toString())
  .toBe('<br>');
  expect(new SingleTag('hr', { class: 'divider'}).toString())
  .toBe('<hr class="divider">');
  expect(new SingleTag('img', { src: 'test.com/test.jpg', alt: 'test image' }).toString())
  .toBe('<img src="test.com/test.jpg" alt="test image">');
});
