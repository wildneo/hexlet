import {
  node, getValue,
  is, map, filter, append,
  make, reduce, toString as htmlToString,
} from 'hexlet-html-tags';
import { wc } from './utils/html';

export const extractHeaders = (list) => {
  const tags = filter(item => is('h2', item), list);
  return map(item => node('p', getValue(item)), tags);
};

export const wordsCount = (tag, word, list) => {
  const tags = filter(item => is(tag, item), list);
  const text = map(item => getValue(item), tags);
  return reduce((item, acc) => (acc + wc(word, item)), 0, text);
};

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
const html4 = append(html3, node('h2', 'header1 lisp'));
const html5 = append(html4, node('p', 'content'));
const html6 = append(html5, node('h2', 'lisp header2 lisp'));
const html7 = append(html6, node('p', 'content lisp'));

console.log(htmlToString(extractHeaders(html3)));
console.log(wordsCount('h2', 'lisp', html7));
