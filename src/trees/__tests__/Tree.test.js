import Tree from '../Tree';
/*eslint-disable*/

describe('Tree', () => {
  const tree = new Tree('/');
  const child = tree.addChild('home', {});
  tree.addChild('etc');

  test('Has children', () => {
    expect(tree.children.size).toBe(2);
  })

  test('Has specific child', () => {
    expect(tree.children.has(child)).toBe(true);
  })
})