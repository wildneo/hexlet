import SingleTag from './js_prototypes_SingleTag';

class PairedTag extends SingleTag {
  constructor(name, attributes, data = '', children = []) {
    super(name, attributes);
    this.data = data;
    this.children = children;
  }

  toString() {
    return [
      `<${this.name}${this.inlineAttrs()}>`,
      `${this.data}${this.children.join('')}`,
      `</${this.name}>`,
    ].join('');
  }
}

export default PairedTag;
