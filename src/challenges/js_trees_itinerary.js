import { find } from 'lodash';

const itinerary = (tree) => {
  const iter = (node, acc) => {
    const [city, children] = node;
    const newAcc = [...acc, city];
    if (city === 'Kursk') {
      return newAcc;
    }
    if (children) {
      return children.map(e => iter(e, newAcc));
    }
  };
  return iter(tree, []);
};


export default itinerary;

const tree = ['Moscow', [
  ['Smolensk'],
  ['Yaroslavl'],
  ['Voronezh', [
    ['Liski'],
    ['Boguchar'],
    ['Kursk', [
      ['Belgorod', [
        ['Borisovka'],
      ]],
      ['Kurchatov'],
    ]],
  ]],
  ['Ivanovo', [
    ['Kostroma'], ['Kineshma'],
  ]],
  ['Vladimir'],
  ['Tver', [
    ['Klin'], ['Dubna'], ['Rzhev'],
  ]],
]];

// itinerary(tree[1][1]);
console.log(itinerary(tree));
// console.log(JSON.stringify(itinerary(tree)));
