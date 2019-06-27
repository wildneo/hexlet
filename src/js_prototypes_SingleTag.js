import Node from './js_prototypes_Node';

class SingleTag extends Node {
  toString() {
    return `<${this.name}${this.getInlineAttrs()}>`;
  }
}

// function toString() {
//   return `<${this.name}${this.getInlineAttrs()}>`;
// }

// function SingleTag(name, attributes) {
//   Node.call(this, name, attributes);
// }

// SingleTag.prototype.toString = toString;

export default SingleTag;
