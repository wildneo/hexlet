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
    const chekParamType = (param) => {
      if (typeof param === 'function') {
        return param;
      }
      if (typeof param === 'object') {
        const key = Object.keys(param);
        return car => car[key] === param[key];
      }
    };
    return parameters.reduce((acc, param) => acc.build(coll => coll.filter(chekParamType(param))), this);
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

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
const coll = new Enumerable(cars);

const result = coll.where(car => car.brand === 'kia', { year: 2010 }, car => car.model === 'rio');

console.log(result.toArray());
