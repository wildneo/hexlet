import Node from './js_prototypes_Node';

export default class extends Node {
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
