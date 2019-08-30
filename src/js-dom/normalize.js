import { camelCase } from 'lodash';

export default (document) => {
  const allElements = document.querySelectorAll('body *');
  allElements.forEach(element => (
    [...element.classList]
      .map(oldClass => element.classList.replace(oldClass, camelCase(oldClass)))
  ));
};
