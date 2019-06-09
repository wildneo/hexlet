/* eslint-disable */
import { l, cons as consList, concat, isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data';
import { make, node, append, is, hasChildren, children, reduce } from 'hexlet-html-tags';
/* eslint-enable */
/* eslint-disable no-console */

const select = (tag, list) => {
  const iter = (item, acc) => {
    if (isEmpty(item)) {
      return acc;
    }
    const current = head(item);
    const rest = tail(item);
    const newAcc = is(tag, current) ? consList(current, acc) : acc;
    if (!hasChildren(current)) {
      return iter(rest, newAcc);
    }
    return iter(rest, iter(children(current), newAcc));
  };
  return iter(list, l());
};

const select2 = (tag, list) => reduce((e, acc) => {
  const newAcc = hasChildren(e) ? concat(select2(tag, children(e)), acc) : acc;
  return is(tag, e) ? consList(e, newAcc) : newAcc;
}, l(), list);

export default select;

const dom1 = make();
const children1 = l(node('a', l(node('span', 'scheme'))));
const dom2 = append(dom1, node('h1', children1));
const dom3 = append(dom2, node('p', 'is a lisp'));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children2));
const children3 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children3));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children4 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children4));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));

console.log(listToString(select2('p', dom)));
console.log(listToString(select('section', dom)));
console.log(listToString(select('li', dom)));
console.log(listToString(select('p', dom)));
console.log(listToString(select('h1', dom)));
console.log(listToString(select('div', dom)));
