import path from 'path';
import Tree from './js_errors_Tree';
import getPathParts from './utils/getPathParts';
import typeOf from './utils/typeOfNode';

class HexletFs {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  mkdirSync(filepath) { // повторяющийся код
    const { base, dir } = path.parse(filepath);
    const node = this.findNode(dir);
    return typeOf(node) === 'dir'
      ? node.addChild(base, { type: 'dir' })
      : false;
  }

  touchSync(filepath) { // повторяющийся код
    const { base, dir } = path.parse(filepath);
    const node = this.findNode(dir);
    return typeOf(node) === 'dir'
      ? node.addChild(base, { type: 'file' })
      : false;
  }

  isDirectory(filepath) { // повторяющийся код
    const node = this.findNode(filepath);

    return typeOf(node) === 'dir';
  }

  isFile(filepath) { // повторяющийся код
    const node = this.findNode(filepath);

    return typeOf(node) === 'file';
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0
      ? this.tree
      : this.tree.getDeepChild(parts);
  }
}

export default HexletFs;
