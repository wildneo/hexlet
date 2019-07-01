import path from 'path';
import getPathParts from './utils/getPathParts';

import Tree from './js_errors_Tree';

import Dir from './js_errors_Dir';
import File from './js_errors_File';

class HexletFs {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  mkdirSync(filepath) {
    const { base, dir } = path.parse(filepath);
    return this.findNode(dir).addChild(base, new Dir(base));
  }

  touchSync(filepath) {
    const { base, dir } = path.parse(filepath);
    return this.findNode(dir).addChild(base, new File(base));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    return current.getMeta().getStats();
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0
      ? this.tree
      : this.tree.getDeepChild(parts);
  }
}

export default HexletFs;

// const files = new HexletFs();
// files.mkdirSync('/etc/ttt');
// // files.touchSync('/etc').mkdirSync('file');
// console.table(files.statSync('/etc/ttt'));
