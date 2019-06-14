class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  get length() {
    return this.getMemorizedCollection().length;
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  getMemorizedCollection() {
    if (!this.memo) {
      this.memo = this.operations.reduce((coll, operation) => operation(coll), this.collection);
    }
    return this.memo;
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  where(...parameters) {
    const filter = parameters.map((parameter) => {
      if (typeof parameter === 'function') {
        return coll => coll.filter(parameter);
      }
      return coll => coll.filter(element => (
        Object.keys(parameter)
          .every(key => parameter[key] === element[key])
      ));
    });
    return this.build(filter);
  }

  orderBy(fn, direction = 'asc') {
    const compare = {
      asc: (a, b) => (fn(a) > fn(b) ? 1 : -1),
      desc: (a, b) => (fn(a) < fn(b) ? 1 : -1),
    };
    return this.build(coll => coll.slice().sort(compare[direction]));
  }

  toArray() {
    return this.getMemorizedCollection().slice();
  }
}

export default Enumerable;
