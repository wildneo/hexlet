
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

const buildHtml = (node) => {
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

  return [
    `<${tag.name}${inlineAttrs(tag.attributes)}>`,
    `${tag.data}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`,
  ].join('');
};

export default buildHtml;
