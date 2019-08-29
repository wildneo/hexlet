export default (node) => {
  const txt = node.querySelectorAll('div');
  console.log([...txt].map(e => e.textContent));
  return txt;
};
