class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  inlineAttrs() {
    return Object.keys(this.attributes)
      .map(key => ` ${key}="${this.attributes[key]}"`)
      .join('');
  }

  toString() {
    return `<${this.name}${this.inlineAttrs()}>`;
  }
}

export default SingleTag;
