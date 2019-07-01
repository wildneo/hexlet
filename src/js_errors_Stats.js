export default class Stats {
  constructor(meta) {
    this.name = meta.name;
    this.type = meta.type;
  }

  isFile() {
    return this.type === 'File';
  }

  isDirectory() {
    return this.type === 'Dir';
  }
}
