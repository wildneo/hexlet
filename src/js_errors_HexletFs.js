import path from 'path';
import Tree from './js_errors_Tree';

class HexletFs {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  getPathParts(str) {
    return str.split(path.sep);
  }

};

export default HexletFs;
