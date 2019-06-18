
const filter = (fn, node) => {
  const { type, children } = node;
  const processedNode = { ...node };

  return type === 'directory'
    ? { ...processedNode, children: children.map(n => filter(fn, n)).filter(fn) }
    : processedNode;
};

export default filter;
