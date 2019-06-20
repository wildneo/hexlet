
const iter = (node) => {
  if (node[0] instanceof Array) {
    return { type: 'tagList', data: node.map(iter) };
  }
  const name = node[0];
  const data = node[1] instanceof Array || typeof node[1] === 'string' ? node[1] : node[2];
  const processedData = data instanceof Array ? iter(data) : data;
  const attr = node[2] || !(node[1] instanceof Array || typeof node[1] === 'string') ? node[1] : {};

  return { type: 'tag', name, data: processedData || '', attr: attr || {} };
};

const iterAst = (ast) => {
  switch (ast.type) {
    case 'tagList':
      return `${ast.data.map(iterAst).join('')}`;

    case 'tag':
      const attrLine = Object.keys(ast.attr).reduce((acc, key) => (
        `${acc} ${key}="${ast.attr[key]}"`), '');
      return `<${ast.name}${attrLine}>${iterAst(ast.data)}</${ast.name}>`;

    default:
      return ast;
  }
}
const buildHtml = (tree) => {
  const astTree = iter(tree);
  console.log(JSON.stringify(astTree, null, 2));
  return iterAst(astTree);
};

export default buildHtml;


const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span'],
      ['span', { class: 'text', id: 'uniq-key' }],
    ]],
  ]],
]];
const test = buildHtml(data);
console.log(test);
// console.log(JSON.stringify(test, null, 2));

// console.log(buildHtml(data));
// console.log(assert(data[1][1]));
