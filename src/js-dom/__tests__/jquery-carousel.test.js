import fs from 'fs';
import path from 'path';
import { html } from 'js-beautify';

import run from '../jquery-carousel';

const fixuturesPath = path.join(__dirname, '__fixtures__');
const getTree = () => html(document.body.innerHTML);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'jquery-carousel.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', () => {
  const prev = document.querySelector('a[data-slide="prev"]');
  const next = document.querySelector('a[data-slide="next"]');
  next.click();
  expect(getTree()).toMatchSnapshot();

  prev.click();
  expect(getTree()).toMatchSnapshot();

  next.click();
  expect(getTree()).toMatchSnapshot();

  next.click();
  expect(getTree()).toMatchSnapshot();

  next.click();
  expect(getTree()).toMatchSnapshot();

  next.click();
  expect(getTree()).toMatchSnapshot();

  prev.click();
  expect(getTree()).toMatchSnapshot();

  prev.click();
  expect(getTree()).toMatchSnapshot();

  prev.click();
  expect(getTree()).toMatchSnapshot();

  prev.click();
  expect(getTree()).toMatchSnapshot();
});
