import path from 'path';
import errors from 'errno';

import getPathParts from '../utils/getPathParts';
import HexletFsError from '../utils/HexletFsError';

import Tree from './js_errors_Tree';
import Dir from './js_errors_Dir';
import File from './js_errors_File';

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    return current.getMeta().getStats();
  }

  copySync(srcPath, destPath) {
    const { base: srcBase } = path.parse(srcPath);
    const { dir, base } = path.parse(destPath);
    const src = this.findNode(srcPath);
    const dest = this.findNode(dir);

    if (!src) {
      throw new HexletFsError(errors.code.ENOENT, srcPath);
    }
    if (src.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, srcPath);
    }
    if (!dest) {
      throw new HexletFsError(errors.code.ENOENT, destPath);
    }
    if (dest.getMeta().isFile()) {
      throw new HexletFsError(errors.code.ENOENT, destPath);
    }

    const body = src.getMeta().getBody();
    const current = dest.getChild(base);

    if (!current || current.getMeta().isFile()) {
      return dest.addChild(base, new File(base, body));
    }

    return current.addChild(srcBase, new File(srcBase, body));
  }

  writeFileSync(filepath, body) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().isFile()) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    const current = parent.getChild(base);
    if (current && current.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, filepath);
    }
    parent.addChild(base, new File(base, body));
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    if (parent.getMeta().isFile()) {
      throw new HexletFsError(errors.code.ENOTDIR, filepath);
    }
    return parent.addChild(base, new File(base, ''));
  }

  mkdirpSync(filepath) {
    getPathParts(filepath).reduce((subtree, part) => {
      const current = subtree.getChild(part);
      if (!current) {
        return subtree.addChild(part, new Dir(part));
      }
      if (current.getMeta().isFile()) {
        throw new HexletFsError(errors.code.ENOTDIR, filepath);
      }

      return current;
    }, this.tree);
  }

  readFileSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      throw new HexletFsError(errors.code.ENOENT, filepath);
    }
    if (current.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, filepath);
    }
    return current.getMeta().getBody();
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
