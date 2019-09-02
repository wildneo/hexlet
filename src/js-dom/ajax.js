import 'whatwg-fetch';

export default () => {
  const createElem = (tagName, textContent) => {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    return element;
  };

  const appendToList = (selector, items) => {
    const parent = document.querySelector(selector);
    parent.innerHTML = '';
    items.forEach(item => parent.append(item));
  };

  const process = async ({ target: { dataset, value } }) => {
    const selector = `ul[data-autocomplete-name=${dataset.autocompleteName}]`;
    const route = dataset.autocomplete;
    const url = new URL(route, window.location.origin);
    url.searchParams.append('term', value);
    const response = await fetch(url);
    const dataArray = await response.json();
    if (dataArray.length === 0) {
      dataArray.push('Nothing');
    }
    const listItems = dataArray.map(item => createElem('li', item));
    appendToList(selector, listItems);
  };

  const inputs = document.querySelectorAll('[data-autocomplete]');
  inputs.forEach(input => input.addEventListener('input', process));
};
