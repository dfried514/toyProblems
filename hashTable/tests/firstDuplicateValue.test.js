import firstDuplicateValue from '../firstDuplicateValue.js';

const r1 = [1,2,3,4,5];
const e1 = -1;

const r2 = [2,4,2,1];
const e2 = 2;

describe('firstDuplicateValue', () => {
  test('no duplicate', () => {
    expect(firstDuplicateValue(r1)).toBe(e1);
  });
  test('duplicate', () => {
    expect(firstDuplicateValue(r2)).toBe(e2);
  });
});
