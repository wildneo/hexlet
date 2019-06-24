const singleTagsList = new Set(['hr', 'img', 'br']);

const propActions = [
  {
    name: 'data',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

const checkArg = arg => propActions.find(({ check }) => check(arg)).name;

const inlineAttrs = attributes => (
  Object.keys(attributes)
    .map(key => ` ${key}="${attributes[key]}"`)
    .join('')
);

export const parse = (node) => {
  const [first, ...rest] = node;
  const root = {
    name: first,
    data: '',
    attributes: {},
    children: [],
  };
  const tag = rest
    .reduce((acc, arg) => (
      { ...acc, [checkArg(arg)]: arg }
    ), root);

  return {
    name: tag.name,
    data: tag.data,
    attributes: tag.attributes,
    children: tag.children.map(parse),
  };
};

export const render = astNode => ([
  `<${astNode.name}${inlineAttrs(astNode.attributes)}>`,
  `${astNode.data}${astNode.children.map(render).join('')}`,
  singleTagsList.has(astNode.name)
    ? ''
    : `</${astNode.name}>`,
].join(''));
