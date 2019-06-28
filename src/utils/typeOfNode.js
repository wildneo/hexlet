export default node => (
  node ? node.getMeta().type : node
);
