import * as pairs from 'hexlet-pairs';
import * as type from './utils/type';


export const make = (name, damage) => (
  type.attach('simpleCard', pairs.cons(name, damage))
);
export const getName = self => pairs.car(type.contents(self));
export const damage = self => pairs.cdr(type.contents(self));
