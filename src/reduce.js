/* eslint-disable object-curly-newline */
/* eslint-disable no-console */

import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { node, append, make, getValue, is } from 'hexlet-html-tags';

export const reduce = (cb, acc, list) => (
  isEmpty(list) ? acc : reduce(cb, cb(head(list), acc), tail(list))
);

export const emptyTagsCount = (tag, list) => (reduce((element, acc) => (
  is(tag, element) && getValue(element) === ''
    ? acc + 1
    : acc
), 0, list));

const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));
const html4 = append(html3, node('blockquote', ''));
const html5 = append(html4, node('blockquote', ''));
const html6 = append(html5, node('blockquote', 'quote'));

console.log(reduce((element, acc) => (is('h1', element) ? acc + 1 : acc), 0, html6));
console.log(emptyTagsCount('blockquote', html6));
