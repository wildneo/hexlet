
const downcaseFileNames = (node) => {
  const { name, type, children } = node;
  const copyNode = { ...node };

  return type === 'directory'
    ? { ...copyNode, children: children.map(downcaseFileNames) }
    : { ...copyNode, name: name.toLowerCase() };
};

export default downcaseFileNames;
