class Node {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getInlineAttrs() {
    return Object.keys(this.attributes)
      .map(key => ` ${key}="${this.attributes[key]}"`)
      .join('');
  }
}

// function getInlineAttrs() {
//   return Object.keys(this.attributes)
//     .map(key => ` ${key}="${this.attributes[key]}"`)
//     .join('');
// }

// function Node(name, attributes = {}) {
//   this.name = name;
//   this.attributes = attributes;
// }

// Node.prototype.getInlineAttrs = getInlineAttrs;

export default Node;
