export const map = (f, node) => {
  const { name, type, children } = node;
  const copyNode = { ...node };

  return type === 'directory'
    ? { ...copyNode, children: children.map(map) }
    : { ...copyNode, name: name.toLowerCase() };
};

export default map;
