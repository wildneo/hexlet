export default class {
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
