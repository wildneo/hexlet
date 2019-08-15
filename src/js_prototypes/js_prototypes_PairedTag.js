import Node from './js_prototypes_Node';

class PairedTag extends Node {
  constructor(name, attributes, data = '', children = []) {
    super(name, attributes);
    this.data = data;
    this.children = children;
  }

  toString() {
    return [
      `<${this.name}${this.getInlineAttrs()}>`,
      `${this.data}${this.children.join('')}`,
      `</${this.name}>`,
    ].join('');
  }
}

// function toString() {
//   return [
//     `<${this.name}${this.getInlineAttrs()}>`,
//     `${this.data}${this.children.join('')}`,
//     `</${this.name}>`,
//   ].join('');
// }

// function PairedTag(name, attributes, data = '', children = []) {
//   Node.call(this, name, attributes);
//   this.data = data;
//   this.children = children;
// }

// PairedTag.prototype = Object.create(Node.prototype);

// PairedTag.prototype.toString = toString;

export default PairedTag;
