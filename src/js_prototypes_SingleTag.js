import Node from './js_prototypes_Node';

export default class extends Node {
  toString() {
    return `<${this.name}${this.getInlineAttrs()}>`;
  }
}
