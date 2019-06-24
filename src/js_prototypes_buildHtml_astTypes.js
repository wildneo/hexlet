import buildNode from './js_prototypes_buildNode';

const propActions = [
  {
    name: 'data',
    check: arg => typeof arg === 'string',
    process: (...args) => args[0],
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    process: (children, fn) => children.map(fn),
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    process: (...args) => args[0],
  },
];

const checkArg = arg => propActions.find(({ check }) => check(arg));

const parse = (node) => {
  const [first, ...rest] = node;
  const root = {
    name: first,
    attributes: {},
    data: '',
    children: [],
  };
  const tag = rest
    .reduce((acc, arg) => {
      const { name, process } = checkArg(arg);
      return { ...acc, [name]: process(arg, parse) };
    }, root);

  return buildNode(tag.name, tag.attributes, tag.data, tag.children);
};

export default parse;
