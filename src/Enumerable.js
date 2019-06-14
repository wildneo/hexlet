
class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  /**
   * length
   */
  get length() {
    return this.getMemorizedCollection().length;
  }

  /**
   * select
   */
  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  /**
   * where
   */
  where(...parameters) {
    const processedParameters = parameters.map((parameter) => {
      const filter = predicate => coll => coll.filter(predicate);

      if (typeof parameter === 'function') {
        return filter(parameter);
      }

      return filter(element => (
        Object.keys(parameter)
          .every(key => parameter[key] === element[key])
      ));
    });

    return this.build(processedParameters);
  }

  /**
   * orderBy
   */
  orderBy(fn, direction = 'asc') {
    const compare = {
      asc: (a, b) => (fn(a) > fn(b) ? 1 : -1),
      desc: (a, b) => (fn(a) < fn(b) ? 1 : -1),
    };

    return this.build(coll => coll.slice().sort(compare[direction]));
  }

  /**
   * toArray
   */
  toArray() {
    return this.getMemorizedCollection().slice();
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
}

export default Enumerable;
