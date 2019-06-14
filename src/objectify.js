const objectify = (collection, select) => (
  collection.reduce((acc, element) => (
    { [select(element)]: element, ...acc }
  ), {}));

export default objectify;
