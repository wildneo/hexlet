class Tree {
  constructor(name, meta, parent) {
    this.name = name;
    this.meta = meta;
    this.parent = parent;
    this.children = new Set();
  }

  addChild(name, meta) {
    const child = new Tree(name, meta, this.name);
    this.children.add(child);
    return child;
  }

  hasChildren() {
    // TODO:
  }

  hasChild() {
    // TODO:
  }

  getParent() {
    // TODO:
  }
}

export default Tree;

// const tree = new Tree('/');
// const child = tree.addChild('etc');

// console.log(JSON.stringify(tree, null, 2));
// console.log(JSON.stringify(child, null, 2));
