class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  get length() {
    if (!this.memo) {
      this.toArray();
    }
    return this.memo.length;
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  orderBy(fn, direction = 'asc') {
    const compare = {
      asc: (a, b) => (fn(a) > fn(b) ? 1 : -1),
      desc: (a, b) => (fn(a) < fn(b) ? 1 : -1),
    };
    return this.build(coll => coll.slice().sort(compare[direction]));
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((coll, operation) => operation(coll), this.collection);
    }
    return this.memo.slice();
  }
}

export default Enumerable;
