import path from 'path';
import Tree from './js_errors_Tree';
import getPathParts from './utils/getPathParts';

class HexletFs {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  mkdirSync(filepath) {
    const { name, dir } = path.parse(filepath);
    const parts = getPathParts(dir);
    const parent = parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);

    if (parent) {
      return this.tree.addChild(name, { type: 'dir' });
    }
  }

  isDirectory(filepath) {

  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}

export default HexletFs;
