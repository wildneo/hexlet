const values = [8, 3, 2, 9, 11, 15, 5, 1, 7, 6, 13, 4, 12, 10, 14];

const generatePlayingField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 4; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 4; j += 1) {
      const cell = row.insertCell();
      cell.className = 'p-3';
      if (i === 3 && j === 3) {
        cell.classList.add('table-active');
      } else {
        cell.textContent = values[i + (j * 4)];
      }
    }
  }
  return tableEl;
};

const swapContent = (a, b) => {
  const aText = a.textContent;
  const bText = b.textContent;
  a.textContent = bText;  // eslint-disable-line
  b.textContent = aText;  // eslint-disable-line
};
const toggleClass = (className, ...elements) => (
  elements.map(({ classList }) => classList.toggle(className))
);
const getPos = ({ cellIndex, parentElement: { rowIndex } }) => (
  { y: rowIndex, x: cellIndex }
);
const getDist = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

export default () => {
  const process = ({ target }) => {
    const active = document.querySelector('.table-active');
    const distance = getDist(getPos(active), getPos(target));
    if (distance === 1) {
      toggleClass('table-active', active, target);
      swapContent(active, target);
    }
  };

  const container = document.querySelector('.gem-puzzle');
  const gameField = generatePlayingField();
  gameField.addEventListener('click', process);
  container.append(gameField);
};
