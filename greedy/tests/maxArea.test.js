import maxArea from '../maxArea.js';

const n1 = [1,8,6,2,5,4,8,3,7];
const e1 = 49;

const n2 = [1,1];
const e2 = 1;

const n3 = [4,3,2,1,4];
const e3 = 16;

const n4 = [1,2,1];
const e4 = 2;

const n5 = [2,1];
const e5 = 1;

describe('maxArea', () => {
  test('maxArea', () => {
    expect(maxArea(n1)).toBe(e1);
  });
  test('maxArea', () => {
    expect(maxArea(n2)).toBe(e2);
  });
  test('maxArea', () => {
    expect(maxArea(n3)).toBe(e3);
  });
  test('maxArea', () => {
    expect(maxArea(n4)).toBe(e4);
  });
  test('maxArea', () => {
    expect(maxArea(n5)).toBe(e5);
  });
});
