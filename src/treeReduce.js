
const reduce = (fn, node) => {
  const { type, children } = node;
  const processedNode = { ...node };

  return type === 'directory'
    ? { ...processedNode, children: children.map(n => reduce(fn, n)) }
    : processedNode;
};

export default reduce;
