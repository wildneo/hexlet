
const map = (fn, node) => {
  const { type, children } = node;
  const processedNode = fn(node);

  return type === 'directory'
    ? { ...processedNode, children: children.map(n => map(fn, n)) }
    : processedNode;
};

export default map;
