import Stats from './js_errors_Stats';

export default class Node {
  constructor(name, type) {
    this.name = name;
    this.meta = new Stats({ name, type });
  }

  getStats() {
    return this.meta;
  }

  getName() {
    return this.name;
  }
}
