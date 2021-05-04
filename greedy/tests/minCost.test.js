import minCost from '../minCost.js';

const s1 = "abaac";
const c1 = [1,2,3,4,5];
const e1 = 3;

const s2 = "abc";
const c2 = [1,2,3];
const e2 = 0;

const s3 = "aabaa";
const c3 = [1,2,3,4,1];
const e3 = 2;

describe('minCost', () => {
  test('minCost', () => {
    expect(minCost(s1, c1)).toBe(e1);
  });
  test('minCost', () => {
    expect(minCost(s2, c2)).toBe(e2);
  });
  test('minCost', () => {
    expect(minCost(s3, c3)).toBe(e3);
  });
});
