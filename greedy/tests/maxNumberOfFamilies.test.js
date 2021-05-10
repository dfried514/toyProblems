import maxNumberOfFamilies from '../maxNumberOfFamilies.js';

const a1 = 3;
const b1 = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]];
const e1 = 4;

const a2 = 2;
const b2 = [[2,1],[1,8],[2,6]];
const e2 = 2;

const a3 = 4;
const b3 = [[4,3],[1,4],[4,6],[1,7]];
const e3 = 4;

const a4 = 3;
const b4 = [[2,3]];
const e4 = 5;

describe('maxNumberOfFamilies', () => {
  test('maxNumberOfFamilies', () => {
    expect(maxNumberOfFamilies(a1, b1)).toBe(e1);
  });
  test('maxNumberOfFamilies', () => {
    expect(maxNumberOfFamilies(a2, b2)).toBe(e2);
  });
  test('maxNumberOfFamilies', () => {
    expect(maxNumberOfFamilies(a3, b3)).toBe(e3);
  });
  test('maxNumberOfFamilies', () => {
    expect(maxNumberOfFamilies(a4, b4)).toBe(e4);
  });
});
