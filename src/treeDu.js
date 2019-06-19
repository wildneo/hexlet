import reduce from './treeReduce';

const du = (node) => {
  const unsorted = node.children.map(n => (
    [n.name, reduce((acc, nn) => (
      nn.type === 'file' ? acc + nn.meta.size : acc
    ), n, 0)]
  ));
  return unsorted.sort((a, b) => b[1] - a[1]);
};

export default du;
