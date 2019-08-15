// eslint-disable-next-line object-curly-newline
import { cons, filter, concat, isEmpty, head, tail } from 'hexlet-pairs-data';

const sort = (list) => {
  if (isEmpty(list)) {
    return list;
  }
  const left = filter(n => n < head(list), tail(list));
  const right = filter(n => n >= head(list), tail(list));

  return concat(sort(left), cons(head(list), sort(right)));
};

export default sort;
