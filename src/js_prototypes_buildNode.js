import SingleTag from './js_prototypes_SingleTag';
import PairedTag from './js_prototypes_PairedTag';

const buildNode = (name, ...args) => {
  const singleTagsList = new Set(['hr', 'img', 'br']);
  const Tag = singleTagsList.has(name) ? SingleTag : PairedTag;

  return new Tag(name, ...args);
};

export default buildNode;
