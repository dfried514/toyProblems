import maxProfit from '../maxProfit.js';

const a1 = [2,5], b1 = 4;
const e1 = 14;

const a2 = [3,5], b2 = 6;
const e2 = 19;

const a3 = [2,8,4,10,6], b3 = 20;
const e3 = 110;

const a4 = [1000000000], b4 = 1000000000;
const e4 = 21;

describe('maxProfit', () => {
  test('maxProfit', () => {
    expect(maxProfit(a1, b1)).toBe(e1);
  });
  test('maxProfit', () => {
    expect(maxProfit(a2, b2)).toBe(e2);
  });
  test('maxProfit', () => {
    expect(maxProfit(a3, b3)).toBe(e3);
  });
  test('maxProfit', () => {
    expect(maxProfit(a4, b4)).toBe(e4);
  });
});
