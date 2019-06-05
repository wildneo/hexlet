// /* eslint-disable */

import {
  node, getValue, is, map, filter,
  append, make, reduce, toString as htmlToString,
} from 'hexlet-html-tags';
import { toString, reverse } from 'hexlet-pairs-data';
import { wc } from './utils/html';


const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));

export const extractHeaders = (list) => {
  const headers = filter(item => is('h2', item), list);
  const texts = map(item => getValue(item), headers);
  return reduce((item, acc) => {
    return append(acc, node('p', item));
  }, make(), reverse(texts));
};

export const wordsCount = (tag, text, list) => {
  // do something
};


// console.log(htmlToString(html3));
// console.log(toString(extarctHeaders(html3)));
console.log(htmlToString(extractHeaders(html3)));
