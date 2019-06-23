import itinerary from '../js_trees_itinerary';
/*eslint-disable*/

describe('Itinerary', () => {
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

  it('set 1', () => {
    const route1 = ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma'];
    expect(itinerary(tree, 'Dubna', 'Kostroma')).toEqual(route1);
  });

  it('set 2', () => {
    const route2 = ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov'];
    expect(itinerary(tree, 'Borisovka', 'Kurchatov')).toEqual(route2);
  });
});
