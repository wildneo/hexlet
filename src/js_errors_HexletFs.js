import path from 'path';
import getPathParts from './utils/getPathParts';

import Tree from './js_errors_Tree';

import Dir from './js_errors_Dir';
import File from './js_errors_File';

class HexletFs {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  mkdirpSync(filepath) {
    const parts = getPathParts(filepath);

    const result = parts.reduce((parent, part) => {
      if (!parent) {
        return false;
      }
      const child = parent.getChild(part);
      if (!child) {
        return parent.addChild(part, new Dir(part));
      }
      if (child.getMeta().isFile()) {
        return false;
      }

      return child;
    }, this.tree);

    return !!result;
  }

  mkdirSync(filepath) {
    const current = this.findNode(filepath);
    if (current) {
      return false;
    }
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().isFile()) {
      return false;
    }
    parent.addChild(base, new Dir(base));
    return true;
  }

  readdirSync(filepath) {
    const current = this.findNode(filepath);
    if (!current || current.getMeta().isFile()) {
      return false;
    }
    return current.getChildren()
      .map(child => child.getKey());
  }

  touchSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      return false;
    }
    if (parent.getMeta().isFile()) {
      return false;
    }
    parent.addChild(base, new File(base, ''));
    return true;
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }

  rmdirSync(filepath) {
    const { base } = path.parse(filepath);
    const current = this.findNode(filepath);
    if (!current) {
      return false;
    }
    if (current.getMeta().isFile() || current.hasChildren()) {
      return false;
    }
    current.getParent().removeChild(base);
    return true;
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
// files.mkdirSync('/etc');
// files.mkdirSync('/usr');

// files.mkdirpSync('/usr/admin/docs');

// console.log(files.readdirSync('/usr/admin/docs'));
// files.touchSync('/usr/admin/docs/usr.conf');
// console.log(files.readdirSync('/usr/admin/docs'));
