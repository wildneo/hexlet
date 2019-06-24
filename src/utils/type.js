import * as pairs from 'hexlet-pairs';

/**
 * Tagged data constructor
 * @name attach
 */
export const attach = (tag, data) => pairs.cons(tag, data);

/**
 * Get type of tagged data
 * @name typeTag
 */
export const typeTag = taggedData => pairs.car(taggedData);

/**
 * Get contents from tagged data
 * @name contents
 */
export const contents = taggedData => pairs.cdr(taggedData);
