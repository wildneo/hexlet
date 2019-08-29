const search = (node, tag) => {
  const arr = [...node.children];
  const iAcc = arr.filter(({ tagName }) => tagName.toLowerCase() === tag);
  return arr.reduce((acc, elem) => [...acc, ...search(elem, tag)], iAcc);
};

export default search;
