class Tree {
  constructor(key, meta, parent) {
    this.key = key;
    this.meta = meta;
    this.parent = parent;
    this.children = new Map();
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);
    return child;
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    return [...this.children.values()];
  }

  getChild(key) {
    return this.children.get(key);
  }

  getDeepChild(keys) {
    const [first, ...rest] = keys;
    const child = this.getChild(first);

    return child && rest.length > 0
      ? child.getDeepChild(rest)
      : child;
  }

  hasChild(key) {
    return this.children.has(key);
  }

  hasChildren() {
    return this.children.size > 0;
  }

  removeChild(key) {
    return this.children.delete(key);
  }
}

export default Tree;
