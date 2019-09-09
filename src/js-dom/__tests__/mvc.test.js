import fs from 'fs';
import path from 'path';
import { html } from 'js-beautify';
import timer from 'timer-promise';

import run from '../mvc';

const htmlOptions = {
  preserve_newlines: true,
  unformatted: [],
};

const fixuturesPath = path.join(__dirname, '__fixtures__');
const getTree = () => html(document.body.innerHTML, htmlOptions);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'mvc.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', async () => {
  expect(getTree()).toMatchSnapshot();

  const home = document.getElementById('list-home-list');
  const profile = document.getElementById('list-profile-list');

  home.click();
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  profile.click();
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();

  home.click();
  await timer.start(100);
  expect(getTree()).toMatchSnapshot();
});
